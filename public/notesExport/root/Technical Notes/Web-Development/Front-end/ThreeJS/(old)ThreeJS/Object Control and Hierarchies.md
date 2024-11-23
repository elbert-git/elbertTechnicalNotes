# Object Control and Hierarchies
Object transforms
-----------------

There are more than one way of changing object transforms. Most straight-forward is to directly set it's value 

```text-plain
object.{transform}.{axes} = {value}
mesh.position.x = 2
mesh.rotation.y = 2
mesh.scale.z = 2 
mesh.position = new THREE.Vector3(0,0,0);
```

### Rotation stuff

Rotations are quaternions that can be abstracted into Euler vectors. To re-order the rotation order simply…

```text-plain
object.rotation.reorder('xyz');
```

But you can interact with the quaternion directly. See documentation on that [here](https://threejs.org/docs/#api/en/math/Quaternion)

Groups
------

These are empty transformation nodes that you can parent things to. In ThreeJS they are like sub-scenes

```text-plain
// create group
const group = new THREE.Group();

// transform groups
group.scale.y = 20;

// adding to groups
group.add(object);

// remove from groups
group.remove(object);

// adding group to scene
scene.add(group);
```