# Flatpak
Flatpak
-------

A way of packaging software for linux desktop OS-es. Made with removing dependency hell in mind. Traditionally you'd need to deploy your software in all the different package managers. which is a lot of work. Flatpak offers to a single target to deploy into

Other benefits are 

*   sandbox environment for security

#### How to have access to flatpak

you can install gui stores to manage flatpaks like flathub.

Installation 
-------------

Literally just search and install `flatpak` in you package manager

Usage
-----

This is stupidly easy

### Basics

```text-plain
flatpak install {packageName}
flatpak remove {packageName}
flatpak update # you can specify a package to update too
flatpack search {packageName}
flatpak run {packageName};
```

### Other important ones

```text-plain
flatpak uninstall --unused # basically purge orphaned packages
flatpak flatpak list # list installed paks
flatpak repair {packageName} # repair any broken packages
```