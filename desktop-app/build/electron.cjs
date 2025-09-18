const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const fetch = require('node-fetch');

let mainWindow;
let authWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.cjs'),
    },
    icon: path.join(__dirname, 'icon.png'), // Add your app icon
    show: false, // Don't show until ready
  });

  // Load the app
  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startUrl);

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    // Open DevTools in development
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create secure authentication window
function createAuthWindow(authUrl) {
  return new Promise((resolve, reject) => {
    authWindow = new BrowserWindow({
      width: 500,
      height: 700,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        partition: 'auth-session' // Isolated session for auth
      },
      modal: true,
      parent: mainWindow,
      show: false,
      autoHideMenuBar: true,
      webSecurity: true
    });

    // Clear any existing session data
    const authSession = session.fromPartition('auth-session');
    authSession.clearStorageData();

    authWindow.loadURL(authUrl);

    authWindow.once('ready-to-show', () => {
      authWindow.show();
    });

    // Listen for successful authentication
    authWindow.webContents.on('will-navigate', (event, url) => {
      if (url.includes('/?session_token=')) {
        // Extract session token from URL
        const urlParams = new URL(url);
        const sessionToken = urlParams.searchParams.get('session_token');
        
        if (sessionToken) {
          authWindow.close();
          resolve(sessionToken);
        }
      }
    });

    authWindow.on('closed', () => {
      authWindow = null;
      reject(new Error('Authentication window closed'));
    });
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for authentication
ipcMain.handle('start-auth', async () => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/auth-url`);
    const data = await response.json();
    
    if (data.success) {
      const sessionToken = await createAuthWindow(data.authUrl);
      return { success: true, sessionToken };
    } else {
      throw new Error('Failed to get auth URL');
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: error.message };
  }
});

// Verify authentication with backend
ipcMain.handle('verify-auth', async (event, sessionToken) => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/verify-clerk-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionToken })
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Token verification error:', error);
    return { success: false, error: error.message };
  }
});

// Refresh token
ipcMain.handle('refresh-token', async (event, currentToken) => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${currentToken}`,
        'Content-Type': 'application/json',
      }
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Token refresh error:', error);
    return { success: false, error: error.message };
  }
});

// Verify current authentication status
ipcMain.handle('verify-current-auth', async (event, token) => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/verify`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Auth verification error:', error);
    return { success: false, error: error.message };
  }
});

// Logout
ipcMain.handle('logout', async (event, token) => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    
    const data = await response.json();
    
    // Clear local storage and session data
    mainWindow.webContents.executeJavaScript(`
      localStorage.clear();
      sessionStorage.clear();
    `);
    
    return data;
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
});

// Verify offline authentication
ipcMain.handle('verify-offline-auth', async (event, encryptedUserData) => {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/auth/verify-offline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ encryptedUserData })
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Offline auth verification error:', error);
    return { success: false, error: error.message };
  }
});

// IPC handlers for POS functionality
ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

ipcMain.handle('show-message-box', async (event, options) => {
  const { dialog } = require('electron');
  const result = await dialog.showMessageBox(mainWindow, options);
  return result;
});

// Add more IPC handlers for your POS features
ipcMain.handle('save-invoice', async (event, invoiceData) => {
  // Handle invoice saving logic
  console.log('Saving invoice:', invoiceData);
  return { success: true, id: Date.now() };
});

ipcMain.handle('print-receipt', async (event, receiptData) => {
  // Handle receipt printing
  console.log('Printing receipt:', receiptData);
  return { success: true };
});
