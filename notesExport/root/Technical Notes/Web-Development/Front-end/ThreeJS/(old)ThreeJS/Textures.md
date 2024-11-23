# Textures
Textures
--------

### Importing Texture URLs in Javascript

```text-plain
import imageSource from './image.png'
```

### Setting up material texture maps

```text-plain
material.map = image;
```

Loading textures using the loading manager
------------------------------------------

If you need to create loading screen due to large textures see this [doc page](https://threejs.org/docs/index.html#api/en/loaders/managers/LoadingManager)

Texture settings
----------------

Offset, tiling and rotation happens on the texture level

### Offset

```text-plain
colorTexture.offset.x = 0.5
colorTexture.offset.y = 0.5
```

### Tiling

By default tiling is off. To turn it on…

```text-plain
colorTexture.wrapS = THREE.RepeatWrapping //wrapS is X
colorTexture.wrapT = THREE.RepeatWrapping //wrapT is y
```

You can also mirror tilings. This means the it will mirror every tile. Like cheating a non seamless texture into looping

```text-plain
colorTexture.wrapS = THREE.MirroredRepeatWrapping
colorTexture.wrapT = THREE.MirroredRepeatWrapping
```

```text-plain
colorTexture.repeat.x = 2
colorTexture.repeat.y = 3
```

### Rotation

```text-plain
colorTexture.rotation = Math.PI * 0.25
```

Note that you can set the rotation pivot by

```text-plain
colorTexture.center.x = 0.5
colorTexture.center.y = 0.5
```

Mip Mapping
-----------

This prevents unwanted texture artefacts. Like when a texture is just almost perpendicular to the camera producing moire.

### Mini-fication filter

Most of the time you don't need to change this but if you do…

```text-plain
 colorTexture.minFilter = THREE.NearestFilter
```

There are 6 different filters available

*   THREE.NearestFilter
*   THREE.LinearFilter
*   THREE.NearestMipmapNearestFilter
*   THREE.NearestMipmapLinearFilter
*   THREE.LinearMipmapNearestFilter
*   THREE.LinearMipmapLinearFilter

### Magnification Filter

Usually for enlarging pixel art without blurring them together

```text-plain
colorTexture.magFilter = THREE.NearestFilter
```

2 possible values of magnification filters

*   THREE.NearestFilter
*   THREE.LinearFilte