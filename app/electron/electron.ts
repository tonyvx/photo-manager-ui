import { BrowserWindow } from 'electron';

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static browserWindow : typeof BrowserWindow;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = {} as Electron.BrowserWindow;
    }

    private static onReady() {
        Main.mainWindow = new BrowserWindow({ width: 800, height: 600 });
        Main.mainWindow.loadURL('file://' + __dirname + '/../../public/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        // Main.browserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}