# Godot Collisions
Making thing collide
--------------------

To make things collide you need a collider node. There are different types of colliders you can make. 

| Type | desc |
| --- | --- |
| static | this is just a static shape. doesn't move |
| rigid | for active physics objects |
| area | this is main just to detect collisions. not necessarirly interact with physics |
| kinematic | this is for moving objects. like players and stuff |

Then you need to define the collision shape

Just add a collisions shape child node under the collider node

### Using Mesh collisions shapes

Under a mesh instance you can click to create a tri mesh collision shape in the editor. This Uses the mesh model as the collider shape

Masks and Layers
----------------

[Excellent video on this](https://www.youtube.com/watch?v=9k8cMzv0ZNo) 

|     |     |
| --- | --- |
| Layers | determine what other colliders can detect |
| Masks | determine what this collider can detect |

Raycast
-------

### Using the Raycast node

Simplest and fastest way to do it. literally just 

```text-plain
$raycast.is_colliding()
```

if you enable it it fires. every frame. but you can also fire it manually by `.force_raycast_update()`

There are other methods to try get more info as well

*   get\_collider()
*   get\_collision\_point()
*   get\_collission\_normal()
*   get\_collider\_shape()

### (todo) Using the physics server

This is more lower level in godot. The physics server creates

ShapeCast
---------

They are primitive shapes you can check collisions with this.

```text-plain
shapecast.is_colliding()
```

literally a boolean lmao

### Adding exceptions

you can make the shapecast ignore stuff

```text-plain
shapecast.add_exception($node)
```