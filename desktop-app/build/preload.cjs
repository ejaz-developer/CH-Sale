const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // App info
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),

    // Dialog methods
    showMessageBox: (options) => ipcRenderer.invoke('show-message-box', options),

    // Authentication methods
    startAuth: () => ipcRenderer.invoke('start-auth'),
    verifyAuth: (sessionToken) => ipcRenderer.invoke('verify-auth', sessionToken),
    refreshToken: (currentToken) => ipcRenderer.invoke('refresh-token', currentToken),
    verifyCurrentAuth: (token) => ipcRenderer.invoke('verify-current-auth', token),
    logout: (token) => ipcRenderer.invoke('logout', token),
    verifyOfflineAuth: (encryptedUserData) => ipcRenderer.invoke('verify-offline-auth', encryptedUserData),

    // POS specific methods
    saveInvoice: (invoiceData) => ipcRenderer.invoke('save-invoice', invoiceData),
    printReceipt: (receiptData) => ipcRenderer.invoke('print-receipt', receiptData),

    // Add more API methods as needed for your POS system
    getProducts: () => ipcRenderer.invoke('get-products'),
    saveProduct: (productData) => ipcRenderer.invoke('save-product', productData),
    updateInventory: (updates) => ipcRenderer.invoke('update-inventory', updates),
});