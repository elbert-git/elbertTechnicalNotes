# Shell commands
Not just a programming language
-------------------------------

Bash isn't just a programming language it can also have control over the whole OS

Handling directories
--------------------

### Listing files in a directory

```text-plain
ls {path/to/dir}
```

Note that default is current working directory.

Common flags with ls

|     |     |
| --- | --- |
| \-l | Lists items separated line by line |
| \-t | Lists by last modified |
| \-a | Shows hidden `.` files |

### Changing directories

```text-plain
cd {path/to/directory}
```

The paths can be absolute from `/` or relative from `../` or `./` 

### Print working directory

```text-plain
pwd # prints full path working directory
```

### The $HOME directory

A common short-hand for directories 

```text-plain
cd ~
```

cd, ls and pwd  and .. and .

File handling
-------------

### Removing Files

```text-plain
rm {path/to/file}
```

To move directories use the `-r` (recursive) flag.

### Moving files

```text-plain
mv {path/to/file} {path/to/newDirectory}
```

To move directories use the `-r` (recursive) flag.

Note this is also how you rename files.

### Copying Files

```text-plain
mv {path/to/file} {path/to/newDirectory}
```

Handling Shell outputs
----------------------

### Cat

```text-plain
cat some.txt # prints the text contents
```

### Grep

searching based on regex

```text-plain
grep '/regex/' filename
```

use `-f` if you are want to search by string

Searches files with regex

### Piping

```text-plain
cat dictionary | grep "word" # print out dictionary and find word from it
```

Passing left output to right output

Output to file
--------------

`>` and `>>` echoes shell outputs to a file

```text-plain
echo "hello" > hello.txt # replaces contents and writes hello to file
echo "hello" >> hello.txt # appends content to file
```

Alias-es
--------

Aliases are like command short-hands that you specify

```text-plain
alias hello='echo /path/to/hello.txt'
```

then to invoke the alias

```text-plain
hello
```

To list all current aliases

```text-plain
alias -p
```