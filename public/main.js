const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, // Do not show until React is ready
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

// Show window only after React signals readiness
ipcMain.on('react-ready', () => {
  mainWindow.show();
});

















