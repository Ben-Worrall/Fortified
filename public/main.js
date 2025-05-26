const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const http = require('http');

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
     mainWindow.setMenu(null); // Hide the menu bar
  const reactDevServerURL = 'http://localhost:3000';

  // Function to check if React server is running
  const checkReactReady = (url, callback) => {
    const req = http.get(url, () => {
      callback(true);
    });

    req.on('error', () => {
      callback(false);
    });

    req.end();
  };

  // Retry until the React dev server is ready
  const tryLoadURL = () => {
    checkReactReady(reactDevServerURL, (isReady) => {
      if (isReady) {
        mainWindow.loadURL(reactDevServerURL);
      } else {
        setTimeout(tryLoadURL, 300); // Retry in 300ms
      }
    });
  };

  tryLoadURL();
}

app.whenReady().then(createWindow);

// Show window only after React signals readiness
ipcMain.on('react-ready', () => {
  mainWindow.show();
});

















