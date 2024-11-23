# DNF package manager
DNF package manager
-------------------

Package manger used by fedora

Setup
-----

### Selecting the fastest mirrors

Open the dnf conf

```text-plain
sudo vim /etc/dnf/dnf.conf
```

then append this to the conf

```text-plain
# added for speed
fastestmirror=True
max_parallel_downloads=10
defaultyes=True
keepcache=True
```

Basic Usage
-----------

### Updating all packages

what you will use the most

```text-plain
sudo dnf update
```

### Installing packages

just like so

```text-plain
sudo dnf install package_name
```

you can search for packages like so

```text-plain
dnf search package_name
```

### Removing packages

you remove same way you install

```text-plain
sudo dnf remove package_name
```

then you purge orphaned dependencies like so

```text-plain
sudo dnf autoremove
```

RPM fusion
----------

Generally like Arch's AUR but a one time setup. Literally like just adding the repo to the package manager. see [here](#https://rpmfusion.org/Configuration)

Just copy this and paost into terminal

```text-plain
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

To add let the gui package manager have access to rpm

```text-plain
sudo dnf groupupdate core
```

Flatpak
-------

You can use fedora's striped down version of flatpack: flathub. Install it like so

```text-plain
 flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```