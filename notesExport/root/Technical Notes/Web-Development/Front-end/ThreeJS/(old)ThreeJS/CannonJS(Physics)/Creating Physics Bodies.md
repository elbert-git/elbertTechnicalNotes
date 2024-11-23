# Creating Physics Bodies
Creating bodies
---------------

```text-plain
//create body
const body = new Cannon.Body({
	shape: new Cannon.Plane();
})

// add to world
world.addBody(groundBody);
```

Simply call the cannon body constructure and supply the options

### Options

| Options | Descriptions |
| --- | --- |
| shape | the mesh shape of the body (box/sphere/plane/convexHull) |
| mass | the mass lmao |
| type | static or active. `CANNON.Body.STATIC`. By default it is active |
| position | The spawn position (use a cannon.Vec3) |

### Body types

| Type | Descriptions |
| --- | --- |
| CANNON.Body.DYNAMIC | The default fully simulated body |
| CANNON.Body.KINEMATIC | A body driven by velocity. |
| CANNON.Body.STATIC | Just a collider. Doesn't react but collides with other bodies |

### Manipulating body rotations

```text-plain
body.quaternion.setFromEuler({x}, {y}, {z}) // note they are in radians
```

Convex Hull bodies
------------------

Creating a convex shell around  complex shapes to use an approxamation of their shape.

To create the convex hull you need an array of vertice positions with cannon's own vec3.

```text-plain
const vertices = [
	new CANNON.Vec3(-0.05, 0, 0.05),
	new CANNON.Vec3(-0.05, 0, -0.05),
	new CANNON.Vec3(0.05, 0, -0.05),
	new CANNON.Vec3(0.05, 0, 0.05),
	new CANNON.Vec3(0, 1, 0)
]
```

Then you need an array of faces. Which is just an array of vertex ids. following the index of the vertices array

```text-plain
const faces = [
	[0,1,2],
	[2,3,0],
	[0,1,4],
	[1,2,4],
	[2,3,4],
	[3,0,4]
]
```

Then you just create the convex hull shape. This shape is the argument you pass to the cannon.Body constructor. 

```text-plain
// create the shape
const shape = new CANNON.ConvexPolyhedron(vertices, faces);

// create body
const convexHullBody = new CANNON.Body({
	type: CANNON.Body.STATIC,
	shape,
	position: new CANNON.Vec3(0, -0.2, 0)
})
world.addBody(convexHullBody)
```

Compound collision bodies
-------------------------

You can create a compound collision bodies to make more complex shapes

```text-plain
// create normal cannon body
const compoundBody = new CANNON.Body({ mass }) 

// Use a box shape as child shape
const shape = new CANNON.Box(new CANNON.Vec3(size * 0.5, size * 0.5, size * 0.5))

// add the shape to the body
body.addShape(shape, new CANNON.Vec3(-size, -size, 0))
```