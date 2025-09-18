// Authentication service for Electron app
class AuthService {
  constructor() {
    this.token = null;
    this.user = null;
    this.encryptedUserData = null;
    this.isOnline = navigator.onLine;
    
    // Listen for online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.handleOnlineStatusChange();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
    
    // Load saved auth data
    this.loadAuthData();
  }

  // Load authentication data from localStorage
  loadAuthData() {
    try {
      this.token = localStorage.getItem('auth_token');
      const userData = localStorage.getItem('user_data');
      this.encryptedUserData = localStorage.getItem('encrypted_user_data');
      
      if (userData) {
        this.user = JSON.parse(userData);
      }
    } catch (error) {
      console.error('Error loading auth data:', error);
      this.clearAuthData();
    }
  }

  // Save authentication data to localStorage
  saveAuthData(token, user, encryptedUserData) {
    try {
      this.token = token;
      this.user = user;
      this.encryptedUserData = encryptedUserData;
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(user));
      localStorage.setItem('encrypted_user_data', encryptedUserData);
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  }

  // Clear authentication data
  clearAuthData() {
    this.token = null;
    this.user = null;
    this.encryptedUserData = null;
    
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    localStorage.removeItem('encrypted_user_data');
  }

  // Start authentication process
  async login() {
    try {
      if (!window.electronAPI) {
        throw new Error('Electron API not available');
      }

      // Start authentication window
      const authResult = await window.electronAPI.startAuth();
      
      if (!authResult.success) {
        throw new Error(authResult.error || 'Authentication failed');
      }

      // Verify the session token with backend
      const verifyResult = await window.electronAPI.verifyAuth(authResult.sessionToken);
      
      if (!verifyResult.success) {
        throw new Error(verifyResult.error || 'Token verification failed');
      }

      // Save authentication data
      this.saveAuthData(
        verifyResult.token,
        verifyResult.user,
        verifyResult.encryptedUserData
      );

      return {
        success: true,
        user: verifyResult.user
      };

    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Logout user
  async logout() {
    try {
      if (this.token && window.electronAPI) {
        await window.electronAPI.logout(this.token);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearAuthData();
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.token && !!this.user;
  }

  // Get current user
  getCurrentUser() {
    return this.user;
  }

  // Get current token
  getToken() {
    return this.token;
  }

  // Verify current authentication status
  async verifyAuth() {
    try {
      if (!this.token) {
        return { success: false, error: 'No token available' };
      }

      if (!this.isOnline) {
        // Try offline verification
        if (this.encryptedUserData && window.electronAPI) {
          const result = await window.electronAPI.verifyOfflineAuth(this.encryptedUserData);
          if (result.success) {
            this.user = result.user;
            return { success: true, user: result.user, offline: true };
          }
        }
        return { success: false, error: 'Offline and no cached data available' };
      }

      // Online verification
      if (window.electronAPI) {
        const result = await window.electronAPI.verifyCurrentAuth(this.token);
        
        if (result.success) {
          this.user = result.user;
          return { success: true, user: result.user };
        } else {
          // Try to refresh token
          const refreshResult = await this.refreshToken();
          if (refreshResult.success) {
            return await this.verifyAuth();
          }
        }
      }

      // Verification failed, clear auth data
      this.clearAuthData();
      return { success: false, error: 'Authentication verification failed' };

    } catch (error) {
      console.error('Auth verification error:', error);
      return { success: false, error: error.message };
    }
  }

  // Refresh authentication token
  async refreshToken() {
    try {
      if (!this.token || !window.electronAPI) {
        return { success: false, error: 'No token or API available' };
      }

      const result = await window.electronAPI.refreshToken(this.token);
      
      if (result.success && result.token) {
        this.token = result.token;
        localStorage.setItem('auth_token', this.token);
      }

      return result;

    } catch (error) {
      console.error('Token refresh error:', error);
      return { success: false, error: error.message };
    }
  }

  // Handle online status change
  async handleOnlineStatusChange() {
    if (this.isOnline && this.encryptedUserData) {
      // Re-authenticate when coming back online
      try {
        const result = await this.verifyAuth();
        if (!result.success) {
          // Force re-login if verification fails
          this.clearAuthData();
        }
      } catch (error) {
        console.error('Re-authentication error:', error);
      }
    }
  }

  // Auto-refresh token periodically
  startTokenRefresh() {
    setInterval(async () => {
      if (this.isAuthenticated() && this.isOnline) {
        await this.refreshToken();
      }
    }, 15 * 60 * 1000); // Refresh every 15 minutes
  }
}

// Create and export singleton instance
const authService = new AuthService();

// Start token refresh
authService.startTokenRefresh();

export default authService;