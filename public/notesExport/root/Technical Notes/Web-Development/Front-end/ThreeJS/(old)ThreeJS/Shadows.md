# Shadows
Activating shadows
------------------

### In renderer

```text-plain
renderer.shadowMap.enabled = true
```

### Per object

Due to performance reasons. Object shadows are all off by default. you need to enabled them on a per object basis. 

```text-plain
meshObj1.castShadow = true
// ...
meshObj3receiveShadow = true
```

Shadow  Settings
----------------

### Map size

The size of the shadow renders overlayed on objects

```text-plain
directionalLight.shadow.mapSize.width = 1024
directionalLight.shadow.mapSize.height = 1024
```

Make sure they are powers of 2 to enable mipmaps.

### Near and far limits

You can limit the range of the shadows relative to the light source

```text-plain
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 6
```

### Blur radius

You can make the shadows blurred 

```text-plain
directionalLight.shadow.radius = 10
```