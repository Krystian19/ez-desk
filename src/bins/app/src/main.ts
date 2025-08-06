import { app, BrowserWindow } from 'electron';
import path from 'path';

const FILES = {
  preload: path.join(__dirname, 'preload.js'),
  index: path.join(__dirname, 'public/index.html'),
};

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   // TODO: revisit the preload script, apparently it's a security best practice
    //   preload: FILES.preload,
    // },
  });

  win.loadFile(FILES.index);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
