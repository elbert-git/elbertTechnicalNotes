# Git Branching And Merging
Branching
---------

One of git's killer features. Allows history versions to branch off and be merged back. allowing different developers to work on stable base and collaborate easier. 

### Creating a new branch

```text-plain
 git checkout -b "branchName"
```

### Changing to a branch

```text-plain
git checkout -b "newBranchName"
```

### Deleting Branches

```text-plain
git branch --delete <branchname>
```

### Renaming branches

```text-plain
git branch -m <newname>
```

### Listing branches

```text-plain
# for list of local branches
git branch

# for list of all branches including in remote
git branch -a
```

Merging branches
----------------

Merges the history and files of branches into one branch. The command below merges the specified branch into the current branch the console is in

```text-plain
git merge "branchName"
```

After merging just remember to commit and push the changes.

**Merge Conflicts**
-------------------

### How to handle it

*   Abort merge

```text-plain
git merge --abort
```

*   Understand where the conflict is in.
*   selectively choose what to commit and remove.

### How to avoid it

*   Communicate and dont work on the same directory/modules