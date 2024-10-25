import { app, BrowserWindow } from "electron";

let startWindow;

const createNewWindow = () => {
  startWindow = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  startWindow.loadFile("index.html");

  startWindow.on("closed", () => {
    startWindow = null;
  });
};

app.on("ready", createNewWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (startWindow === null) createNewWindow();
});
