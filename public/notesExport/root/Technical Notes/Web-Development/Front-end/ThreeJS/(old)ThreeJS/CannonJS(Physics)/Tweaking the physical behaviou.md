# Tweaking the physical behaviours
Damping
-------

Simulating air resitance/drag. Can also be water if you need it

```text-plain
body.linearDamping = {float} // for position damping
body.angularDamping = {float} // for rotation damping
```

Physics Materials
-----------------

Set show 2 objects interact with one another. You can tweaks settings like bounce and friction 

### How it works.

Every object will have a material. You don't define the interaction on a material level. You define interaction between 2 materials.

### Creating a material

```text-plain
const physicsMaterial = new CANNON.Material();

// assign material at body creation
const body = new Cannon.Body({
	shape: new Cannon.Plane(),
	material: physicsMaterial
})
```

### Defining material contact interactions

```text-plain
// define contact behaviour
const contactMaterial = new CANNON.ContactMaterial(mat1, mat2, {
	friction: {value}
	restitution: {value} // this is bounce
})

// add to world
world.addContactMaterial(contactMaterial);
```

Detecting Collision events
--------------------------

Simply add an event listener and provide a callback

```text-plain
b2.addEventListener("collide", function(e){ console.log("sphere collided"); } );
```

to have a collide only rigid body

```text-plain
b2.collisionResponse = 0; // no impact on other bodys
```