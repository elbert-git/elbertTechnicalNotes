# Signals
Godot's own pubsub
------------------

it's their built in pubsub model. they really don't want you to like access objects all around. Prevents tentacle classes.

Connecting Default signals 
---------------------------

every node has built in signals. you can find them in the node tab next to the inspector. Just simply click the signal you want to use and connect it to another node with a script in the tree

Custom signals
--------------

### Creating Signals

```text-plain
signal signal_name(arg1,arg2)
```

### Emitting Signals

```text-plain
emit_signal("signal_name", ar1, arg2)
```

### Connecting signals

Similar to the default signals you can connect it by the UI

Listening to signals via code
-----------------------------

```text-plain
var emitting_node = load("res://node.tscn")
var instance = emitting_node.instantiate()
instance.{signal_name}.connect({method})
```