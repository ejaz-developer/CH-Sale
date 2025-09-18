import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import authService from '../services/authService.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Initialize authentication state
  const initializeAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await authService.verifyAuth();
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        setIsOffline(result.offline || false);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setIsOffline(false);
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login function
  const login = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await authService.login();
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        setIsOffline(false);
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Logout function
  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      setIsOffline(false);
      setIsLoading(false);
    }
  }, []);

  // Refresh authentication
  const refreshAuth = useCallback(async () => {
    try {
      const result = await authService.verifyAuth();
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        setIsOffline(result.offline || false);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setIsOffline(false);
      }
      return result;
    } catch (error) {
      console.error('Auth refresh error:', error);
      setUser(null);
      setIsAuthenticated(false);
      setIsOffline(false);
      return { success: false, error: error.message };
    }
  }, []);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      // Re-verify auth when coming back online
      refreshAuth();
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [refreshAuth]);

  // Initialize auth on mount
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // Auto-refresh auth every 30 minutes
  useEffect(() => {
    if (isAuthenticated && !isOffline) {
      const interval = setInterval(() => {
        refreshAuth();
      }, 30 * 60 * 1000); // 30 minutes

      return () => clearInterval(interval);
    }
  }, [isAuthenticated, isOffline, refreshAuth]);

  const value = {
    user,
    isLoading,
    isAuthenticated,
    isOffline,
    login,
    logout,
    refreshAuth,
    getToken: () => authService.getToken(),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};