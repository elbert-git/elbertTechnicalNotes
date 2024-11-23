# Understanding the AWM config file
General intuition
-----------------

It's all in the rc.lua file. Most of the the configs are handled through 6 major classes(seen in the table below). The file can be further extended with lua and the right bash programs

|     |     |
| --- | --- |
| Gears | utilities module. like for converting values |
| wibox | widgets framework |
| awful | window management |
| naughty | notifications |
| ruled | events listener |
| menubar | menuss??? what this ethis mean |

The 6 core classes that shape the whole AWM experience

Parsing the default config file
-------------------------------

The file can be divided into these subsections

|     |     |
| --- | --- |
| Importing the core classes | Imports core classes to configure rc.lua |
| Error handling | Handle displaying errors |
| Variables | Default editors, terminals and programs. |
| Menus | Handle the start menu (Top left icon of screen) |
| Tag layouts | Layouts for every window (tags are windows) |
| Wallpaper | set wallpaper lol |
| Wibar | widgets on the top barjjj |
| Mouse-Bindings | self explanatory |
| Key-Bindings | self explanatory |
| Rules | specific layouts for specific programs |
| Title bars | window title bars |
| Notifications | self explanatory |

Extending awesome window manager further
----------------------------------------

With lua in the rc.lua. you can create more functionalities to extend AWM. By using the default classes it should be more than enough to reflect the functions in the desktop front end.