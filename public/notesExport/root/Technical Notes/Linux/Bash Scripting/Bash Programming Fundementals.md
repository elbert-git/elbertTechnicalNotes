# Bash Programming Fundementals
The first line of a script
--------------------------

Put this line on top if you are creating a bash script file

```text-plain
#!/usr/bin/env bash // this signals a file is a bash script
```

Logging
-------

```text-plain
echo {stuff}
```

Comments
--------

```text-plain
# this is a comment
```

Variables
---------

```text-plain
Variable={stuff} # note no spaces
```

### Arrays

```text-plain
someArray=(valA valB valC) 
```

If-statements
-------------

```text-plain
if[ $Name != $USER ]
then
	#code
else
	#code
fi
```

You need to terminate if statements with fi

Sleep
-----

Pause the shell for n seconds

```text-plain
sleep 60 # in seconds
```

Functions
---------

##### Create a function

```text-plain
function fucntionName ()
{
    #code 
    return $1 # use argument 1
}
```

arguments are referenced by $1, $2 and $3 and so on

##### Calling a function

```text-plain
functionName {arg1} {arg2}
```

Loops
-----

### For Loop 

```text-plain
for i in "${array0[@]}"; do
    echo "$i"
done
```

#### While loop

```text-plain
while [ true ]
do
    echo "loop body here..."
    break
done
```

Running Shells scripts
----------------------

```text-plain
sh {path/to/script}
```