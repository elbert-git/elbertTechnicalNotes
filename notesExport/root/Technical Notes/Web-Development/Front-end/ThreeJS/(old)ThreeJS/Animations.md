# Animations
Using an update loop
--------------------

You can use an update loop to animation items simply

```text-plain
// in update loop
meshObj.rotation.x+=20;
```

Using Gsap
----------

> [GSAP notes](../../GSAP.md)

Instead of targetting elements. you target specific floats or vectors

```text-plain
gsap.to(mesh.position, {duration: 1, x: 5}); 
```

Imported model controls
-----------------------

> [see importing models page](Importing%20Models.md)