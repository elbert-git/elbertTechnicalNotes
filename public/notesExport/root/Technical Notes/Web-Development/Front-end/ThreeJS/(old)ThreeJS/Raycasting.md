# Raycasting
Ray casting
-----------

Exactly as you know it

Shooting a ray
--------------

Create a ray

```text-plain
const raycaster = new THREE.Raycaster()
```

Setting the origin and driection

```text-plain
const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()

raycaster.set(rayOrigin, rayDirection) // just provide the starting and ending vector three
```

Shooting the ray.

```text-plain
const intersect = raycaster.intersectObject(object2) // for one object collision
const intersects = raycaster.intersectObjects([object1, object2, object3]) // for multiple objects
```

Ray collision data
------------------

The raycast will return an array intersection result object containing

*   distance
*   face
*   faceIndex
*   Object
*   point: vec3 pos of collision
*   uv

It will always been an array because one ray can instersect a convex object multiple times

Mouse raycaster
---------------

*   getting the mouse position in normalized coordinates
*   setting from camera
*   mouseexit and mouseenter events

*   setup 
*   usage
*   results
    *   result metadat
    *   operating on teh result
*   mouse raycaster