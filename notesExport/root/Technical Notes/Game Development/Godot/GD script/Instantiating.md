# Instantiating
### Preload the node

```text-plain
var mynode = preload("res://path/to/node.tscn")
```

### Instantiate

```text-plain
var inst = mynode.instantiate() # instanciate
object.add_child(inst) # add to world tree
```

you can aslo just go `add_child(node)` to directly put it under current node