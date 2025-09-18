const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // App info
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),

    // Dialog methods
    showMessageBox: (options) => ipcRenderer.invoke('show-message-box', options),

    // POS specific methods
    saveInvoice: (invoiceData) => ipcRenderer.invoke('save-invoice', invoiceData),
    printReceipt: (receiptData) => ipcRenderer.invoke('print-receipt', receiptData),

    // Add more API methods as needed for your POS system
    getProducts: () => ipcRenderer.invoke('get-products'),
    saveProduct: (productData) => ipcRenderer.invoke('save-product', productData),
    updateInventory: (updates) => ipcRenderer.invoke('update-inventory', updates),
});