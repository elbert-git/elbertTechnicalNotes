# Arch Pacman
Pacman
------

Arch's package mangaer

Usage
-----

updating

```text-plain
sudo pacman -Syyu
```

Installing

```text-plain
sudo pacman -S {PackageName}
```

searching packages

```text-plain
sudo pacman -S {packageName}
```

removing packages, and their dependencies

```text-plain
sudo pacman -Rns {packageName}
```

Choosing the fastest Mirror
---------------------------

**Install Reflector:**

```text-plain
sudo pacman -S reflector
```

**Generate Mirror List:** Run Reflector to generate a new mirror list. For instance, to fetch the 5 most recently synchronized mirrors sorted by download speed:

```text-plain
sudo reflector --latest 5 --sort rate --save /etc/pacman.d/mirrorlist
```

**Update Pacman's Database:** After creating the updated mirrorlist, update Pacman's database:

```text-plain
sudo pacman -Syy
```

Solving common issues
---------------------

### Keyring issues

Install archlinux-keyring

```text-plain
sudo pacman -S archlinux-keyring
```

### Broken updates

Haven't noted this down. It's the one where you interupt -Syyu and there are broken download updates