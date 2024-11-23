# Python syntax
Logging
-------

```text-plain
print({thingToPrint})
```

Comments
--------

```text-plain
# this is comment
```

Variables
---------

```text-plain
var = {value} // just like that
```

### data types

*   booleans
*   integers
*   floats
*   list (brain-dead array)

Unique data types
-----------------

### Dictionary

this is literally a json or javascript object

```text-plain
dict = {
	"name": {value},
	"someFunc": funcName
}
```

note you don't access this by the dot notation you have to `dict['propName']`

Functions
---------

```text-plain
def someFunc(args1, args2):
	return arg1
```

Use indents not curly brackets to make a code block.

Loops
-----

### For

```text-plain
for i in {array}:
	# code...
```

this is like a for each array.  You can also use `len(array)` to get an array length to handle indeces. 

```text-plain
for i in range(array.length):
	print(i)
```

### While loops

```text-plain
while {someBool}:
	# code
```

### Breaks

```text-plain
while {someBool}:
	if {bool}: 
		break
```

`break` breaks the loops and skips

If-statements
-------------

```text-plain
if {someBool}:
	# code
elif {someBool}:
	# code
else:
	# some code
```

Switch statements
-----------------

```text-plain
match term:
    case pattern-1:
         action-1
    case pattern-2:
         action-2
    case pattern-3:
         action-3
    case _:
        action-default
```