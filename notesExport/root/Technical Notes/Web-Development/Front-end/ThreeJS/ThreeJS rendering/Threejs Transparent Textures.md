# Threejs Transparent Textures
Enabling Transparency
---------------------

```text-plain
// load texture
const textureLoader = new three.TextureLoader();
const texture = textureLoader.load('path/to/texture');

// set transparency   
material.transparent = true
material.alphaMap = texture;
```

Dealing with transparency issues
--------------------------------

Just deal with it with either one of this… just trial and error lol.   
Do only one of these

```text-plain
// material.alphaTest = 0.001; // this is a alpha brightness cut-off feature
// material.depthTest = 0.; // if no two different object overlap each other
// material.depthWrite = false; // most computationally expensive but least drawback
```