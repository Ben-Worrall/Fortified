const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  notifyReactReady: () => ipcRenderer.send('react-ready'),
});