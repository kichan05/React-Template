import {app, BrowserWindow} from "electron";
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences : {
      nodeIntegration: true
    }
  });

  win.loadFile(path.join(__dirname, "../build/index.html"));
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if(process.platform !== "darwin") {
    app.quit();
  }
})