const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const GObject = imports.gi.GObject;

let infoApp;

const InfoAppIndicator = GObject.registerClass(
    class InfoAppIndicator extends PanelMenu.Button {
        _init() {
            super._init(0.0, `Info App Indicator`, false);
            this.buttonText = new St.Label({
                text: 'robotom\'s PC!',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.add_child(this.buttonText);
        }
    }
);

function init() {
    infoApp = new InfoAppIndicator();
}

function enable() {
    Main.panel.addToStatusArea('infoApp', infoApp);
}

function disable() {
    infoApp.destroy();
}
