# Awesome Window Manager
![awesome-logo](Awesome Window Manager_awesome.svg)

**Awesome Window Manager**
--------------------------

It's an easy to configure window manger

**Installation**
----------------

```text-plain
sudo pacman -S awesome
```

**Config and theme file setup**
-------------------------------

**Copying the config file.** 

See also [‘understanding the awm config file’](Awesome%20Window%20Manager/Sources/From%20awesome/Understanding%20the%20default%20conf.md) But honestly you can probably just search the comments and figure out what you need to change

```text-plain
cp /etc/xdg/awesome/rc.lua ~/.config/awesome/rc.lua
```

**Copying the theme file.** 

```text-plain
 cp ~/.config/awesome/mytheme.lua ~/.config/awesome/theme.lua
```

Remember to connect the theme file in the rc.lua

```text-plain
beautiful.init('./path/to/theme.lua')
```