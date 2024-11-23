# Git
**Git**
-------

The premiere version control system

This notes only covers the bash CLI. Idk any guis for this

**Installation**
----------------

Just google this lmao and download git

[https://git-scm.com/downloads](https://git-scm.com/downloads)

**Basic Daily Use**
-------------------

### Setup

*   Pulling a repo to you device

```text-plain
git clone {url to remote repop}
```

*   Starting a new git repo

```text-plain
git init
```

### Selecting branches

*   list all branches

```text-plain
git branch -a
```

*   Changing branches

```text-plain
git checkout "branchName"
```

*   Creating new branches from an exisiting branch
    *   note best to name your branches branching out from the main branch.

```text-plain
git checkout -b "oldBranchName/NewBranchOffShoot"
```

### Basic Push and Pull

*   Pulling changes from remote

```text-plain
git pull
```

*   Pushing

```text-plain
git add -A // or add specific directories and files
git commit -m "commit message"
git push
```

**Git status checks**
---------------------

*   git log

```text-plain
git log
```

Sees history of commit messages

*   git log graph

```text-plain
git log --graph --oneline --decorate
```

Sees ascii graph of branches and commit messages

**Remote Repo Stuff**
---------------------

### Adding a new remote repo

```text-plain
git remote add origin {url to repo}
```

### Starting a new remote repo in bash

```text-plain
git init --bare
```

This creates an online git repository where other git clients can remote into.

**Undoing changes in github**
-----------------------------

### Undoing commits (git reset)

In short it's using this

```text-plain
git reset
```

this undos your previous commit

*   **if you need to commit much further then that**

1.  Select which commit you want to return to

```text-plain
git log
```

this command will list a history of your commits

1.  copy the commit id
2.  reset into the commit

```text-plain
git reset "commit id"
```

##### Hard and soft resets

by default "git reset" only rewrites the git logs. Doesn't change the state of the files

If you want your files to time travel back as well (**Possibly overwriting new changes**)

use the hard flag

```text-plain
git reset --hard
```

### Git revert (slightly cleaner than reset)

```text-plain
git revert "commt id"
```

### Git commit amend

```text-plain
git commit --amend -m "new message"
```

```text-plain
git commit "commit id" --amend -m "new commit message"
```