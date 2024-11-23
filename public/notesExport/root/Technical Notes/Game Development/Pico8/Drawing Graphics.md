# Drawing Graphics
Clearing Screen
---------------

```text-plain
cls({colorInt})
```

this will clear the canvas. You can also pass in an integer to fill the screen with a particular color

Basic Shapes
------------

```text-plain
circ({x:int}, {y:int}, {radius:int}, {color:int});
circfill({x:int}, {y:int}, {radius:int}, {color:int});
rect({x:int},{y:int},{endX:int},{endY:int}, {color:int})
recfill({x:int},{y:int},{endX:int},{endY:int}, {color:int})
```

Drawing Sprites
---------------

```text-plain
spr({spriteIndex:int}, {x:int}, {y:int})
```

Drawing Tile-sets
-----------------