# Ubuntu Top Bar Information App


<p align="center">    <img src="other/ubuntu-bar-apps.png" alt="Ubuntu Top Bar Apps" width="400">
</p>


The reason I came up with this was because I had a few different computers tied to one monitor via a multi-way HDMI switch and it was becoming challenging to differentiate which computer was being displayed as I constantly switched back and forth between them. 

I thought maybe I could just overlay the particular computer name on top of the wallpaper using a paint app but this isn't a great solution if you want to display dynamic information (like an IP address). 

**Solution:** Make a GNOME extension that lives on the top cross bar next to the wifi, battery, etc. icons. 

There are two extension types in the repo: 

- One that displays static info, e.g. strings in `/static-extension/extension.js`. 
- Another that displays dynamic info, e.g. time, dates, weather, IP's (in my case), etc. in `/dynamic-extension/extension.js`.  

### Instructions: 

#### Create extension directory 

Each GNOME extension needs its own directory. The name of the directory must be the UUID (unique identifier) of the extension. The format is `unique-identifier@yourusername`. In my case, info-app@robotom. Make sure you adjust this for your usernmame and app name.  

Run: `mkdir -p ~/.local/share/gnome-shell/extensions/info-app@yourusername`

#### metadata.json

Every GNOME extension needs a metadata.json file that describes the extension.

In `~/.local/share/gnome-shell/extensions/info-app@yourusername`, create a file named metadata.json. Or you can just use mine and modify it.  

#### extension.js

This is the main file of your extension. It will tell GNOME what to display on the top bar.

In `~/.local/share/gnome-shell/extensions/info-app@yourusername`, create a file named extension.js. Or you can just use one of mine and modify it. 

### Enable the extension

First, restart GNOME Shell. You can try `Alt+F2, and then type r and enter`. This might not work if you're using Wayland. For Wayland, you need to `log out and log back in` instead.

Then, enable via terminal: `gnome-extensions enable info-app@yourusername`. It should show up immediately. In some cases, you may need to restart GNOME Shell again or even restart the computer. 

### More Info 

The GNOME extension will run automaticaly at boot after you enable it. To disable it you can run `gnome-extensions disable info-app@yourusername`. To completely remove it after disabling, you can just delete the directory you created earlier. 

**--------------------------------------------**

*All code was tested on Ubuntu 20 and 22.*

