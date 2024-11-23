# Fedora
Fedora Workstation
------------------

Seems like a very vanilla gnome OS. No bloat. Just the bare essentials. Nothing much but just very very polished gnome OS experience

Key setups
----------

### Multimedia codecs

codecs not installed be default cause not open source

```text-plain
sudo dnf groupupdate multimedia --setop="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
sudo dnf groupupdate sound-and-video
```