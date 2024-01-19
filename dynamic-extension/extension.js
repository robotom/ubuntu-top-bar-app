const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const GObject = imports.gi.GObject;
const Soup = imports.gi.Soup;
const Mainloop = imports.mainloop;
const Clutter = imports.gi.Clutter;

let ipApp;

const IPAppIndicator = GObject.registerClass(
    class IPAppIndicator extends PanelMenu.Button {
        _init() {
            super._init(0.0, `IP App Indicator`, false);
            this.buttonText = new St.Label({
                text: 'Fetching IP...',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.add_child(this.buttonText);
            this._refresh();
        }

        _fetchIP() {
            let httpSession = new Soup.Session();
            let message = Soup.Message.new('GET', 'https://api.ipify.org');
            httpSession.queue_message(message, (session, response) => {
                if (response.status_code !== 200) {
                    this.buttonText.set_text('Error fetching IP');
                    return;
                }
                let ip = response.response_body.data;
                this.buttonText.set_text('Public IP: ' + ip);
            });
        }

        _refresh() {
            this._fetchIP();
            // Update every 60 seconds
            this._timeout = Mainloop.timeout_add_seconds(60, () => {
                this._fetchIP();
                return true; // Repeat
            });
        }

        destroy() {
            if (this._timeout) {
                Mainloop.source_remove(this._timeout);
                this._timeout = null;
            }
            super.destroy();
        }
    }
);

function init() {
    ipApp = new IPAppIndicator();
}

function enable() {
    Main.panel.addToStatusArea('ipApp', ipApp);
}

function disable() {
    ipApp.destroy();
}
