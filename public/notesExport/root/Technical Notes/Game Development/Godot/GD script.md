# GD script
It's very similar to python. Just use your usual python guess and it should work

Variables
---------

just use var(like let in js) and const. very similar to javascript

```text-plain
const SPEED = 0.5
var velocity = 0.1
```

### Naming conventions

Similar to pythons pep8. just use underscores

```text-plain
this_is_an_underscore
```

Functions
---------

Just like python

```text-plain
def someFunc(arguments):
	# code goes here
```

Default Functions
-----------------

### \_ready

on start

### \_update

main program loop

### \_input

on input

### \_unhandled\_input

idk what this means. but it handles mouse movements

@onready executions
-------------------

You may want to access variables when the game/node is ready in the scene. Like getting node references in the game world. you need to preface commands with `@onready`  

```text-plain
@onready var ref_to_node = get_node('path/to/node')
```

Note this executes before  \_ready()

If statements;
--------------

```text-plain
if bool:
	# code
elif bool:
	# code
else:
	# code
```

Export variables
----------------

Creating parameters you can change in the editor. These are setting variables as public for the unity inspector

```text-plain
@export var PARAMETER := {defaultvalueAndType}
@export var PARAMETER : {type}
```

(todo) Referencing nodes
------------------------

### Using the `$`

This is a short hand to get sibiling or children

```text-plain
$NameChildNode
$Parent/Child # you can also get nested items
```

### Using export variables

```text-plain
@export var PARAMETER : {node_type}
```

Then go oto inspector and set the export variable

Delta time
----------

just keep drilling down delta through the functions

```text-plain
def someFuncInUpdate(delta):
	# code

def _update(delta)
	# code with delta
	someFuncInUpdate(delta)
```

Running in the editor
---------------------

By default the script only runs during playtime. but you can make the script run in the editor by adding `tool` in the firs tline

Importing functions
-------------------

```text-plain
var script = preload("res://script.gd") # path to script
var instance = script.new()
instance.hello()
```

Accessing other class methods and variables
-------------------------------------------

You can actually just all other methods attached to a node yourself by getting reference to the node

```text-plain
node.your_method()
```

For variables you need to mark it as export

```text-plain
@export var var_name = 0
```