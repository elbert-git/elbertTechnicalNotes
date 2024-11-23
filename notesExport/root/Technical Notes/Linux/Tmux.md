# Tmux
**\-|- TMUX**
-------------

In short, it just allows you to create multiple panes and windows in linux terminals.

**Structure of tmux**
---------------------

##### **sessions > windows > panes**

That's the general structure.

**Sessions**

A group of windows

**Windows**

a single group of panes

**Panes**

This is a single terminal window division of the screen.

**Config**
----------

By default, tmux looks for user-specific configuration at `~/.tmux.conf` and  `~/.config/tmux/tmux.conf` 

A global configuration file may be provided at `/etc/tmux.conf` though by default Arch does not ship such a file.

**Handling Sessions**
---------------------

### In bash

```text-plain
# create new session
tmux 
tmux new -s {sessionName} # new session with name

# list sessions
tmux ls 

# kill session 
tmux kill-session -t {session name}

# attacking sessions
tmux a # attach to last session
tmux a -t {sessionName} # attach to specific session
```

### in Tmux

```text-plain
# list session
c-b w

# navigating between sessions
c-b (
c-b )


# detach from session
c-b d

# rename session
c-b $
```

**Handling Windows**
--------------------

\===================================================================

### In tmux

```text-plain
# create new window
c-b c

# rename window
c-b ,

# close window
c-b &

# navigating windowss
c-b p
c-b n
c-b {number} # navigate by index
```

### In tmux command prompt

```text-plain
# swapping windows
:swap-windows -s {index} -t {index} # swap by specific  indeces
:swap-windows -t {-1/1} # swap currentwindow to by number of movement
```

**Handling Panes**
------------------

\===================================================================

### In tmux

```text-plain
# creating panes
c-b % # split vertically
c-b " # split horizontally

# navigating panes
c-b {arrowkeys}
c-b ; # like alt-tab
c-b q {number} # switch by index

# closing panes
c-b x

# promote pane to window
c-b !

# zooming
c-b z
```

**Copying and Pasting in tmux**
-------------------------------

\===================================================================

### config

put this in the config

```text-plain
setw -g mode-keys vi
```

### usage

```text-plain
c-b [ # enter selection mode; navigate by vim keys

space # start selection

enter # copy to tmux buffer
```