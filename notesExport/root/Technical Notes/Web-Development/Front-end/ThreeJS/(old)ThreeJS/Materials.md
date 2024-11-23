# Materials
Materials
---------

Creating materials go in the format of 

```text-plain
const material = new THREE.MeshBasicMaterial({
	property: value
});

//eg.
const redMaterial= new THREE.MeshBasicMaterial({color: #FF0000});
```

Just create the material and specify the properties you want

To change the material properties simple use the dot notation

```text-plain
redMaterial.color = #00FF00;
```

### The basic material

The simplest material kinda performant and simple to use. Can set colour and texture

```text-plain
const material = new THREE.MeshBasicMaterial()
```

### (PBR) Standard Material

The realistic material. you can set typical your typical pbr channels

```text-plain
const material = new THREE.MeshStandardMaterial()
```

### Matcap

Extremely performant material for shading

```text-plain
const material = new THREE.MeshMatcapMaterial()
material.matcap = matcapTexture
```

### Common Important material properties

##### Wireframe toggle

```text-plain
material.wireframe = true
```

##### opacity

```text-plain
material.transparent = true
material.opacity = 0.5
```

##### Alpha map

```text-plain
material.transparent = true
material.alphaMap = doorAlphaTexture
```

##### Backface culling

```text-plain
material.side = THREE.DoubleSide // turn off backface culling
```

Custom Shaders
--------------

See here for understanding [shaders](#root/EkbToIutKsQu/n6iRE2zsKdrw/Pu6uAeIi13W1) in general.

To use custom shaders simply use a raw shader material. It's a  type of material where you supply your own shader

```text-plain
const material = new THREE.RawShaderMaterial({
    vertexShader: `shaderStringGoesHere`,
    fragmentShader: `shaderStringGoesHere`
})
```

Inside the object properties are where you put the shader materials. You can use backticks to write in the shader contructor. Or import a raw string using vite. 

```text-plain
import shaderString from './shader.glsl?raw'
```

Dealing with transparency issue
-------------------------------