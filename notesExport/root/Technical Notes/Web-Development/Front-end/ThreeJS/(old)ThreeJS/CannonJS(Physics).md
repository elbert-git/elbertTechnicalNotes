# CannonJS(Physics)
CannonJS
--------

A library to create a physics world in javascript. It is platform agnostic

### The physics world

Physics has been abstracted away in other programs you used. But they workd by creating something called a physics world. The actual simulation of the objects. The data is then synced to the real render/3D world. 

### Cannon-es

Cannon js is an abandoned project. but it's so good people made a maintained fork of it. Just updating it for modern times without changing the functionalities. 

Import and setup
----------------

### Install

```text-plain
npm install cannon-es
```

### Import

```text-plain
import * as CANNON from 'cannon-es'
```

### Creating the physics world

```text-plain
// create world with gravity
const world = new CANNON.World({
	gravity: new CANNON.Vec3(0, -0.98, 0);
})

// set timestep
const timeStep = (1/60) // 60 updates persecond 
// lower is more accurate but more computer power

// update tick
world.step(timeStep) // put this func in your update loop. this is a singular update tick
```

Syncing visuals with the physics world
--------------------------------------

Just simply update the object position from the physics body positions

```text-plain
// accessing the physics bodies transforms
body.position;
body.quaternion;
```