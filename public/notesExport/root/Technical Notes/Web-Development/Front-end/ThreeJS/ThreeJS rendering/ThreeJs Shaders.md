# ThreeJs Shaders
What are shaders
----------------

Shaders are programs that define how 3d models look in a rendering engine. They shade in the shape of model

 Vertex and Fragment shaders
----------------------------

There are 2 big types of shaders Vertex and Fragment shaders

|     |     |
| --- | --- |
| Vertex Shaders | help position the vertices of the mesh on screen. so any displacements that moves the actualy model vertices are done here |
| Fragments Shaders | Are responsible for the actual colors of the faces. So texture sampling and other color effects are done here. |

Creating Shaders in ThreeJS
---------------------------

First up if you are using vite install this to be able to import glsl

```text-plain
npm install vite-plugin-glsl
```

using vite you can also import raw string as

```text-plain
import shaderString from './shader.glsl?raw'
```

### RawShaderMaterial

Then you create the material either using `RawShaderMaterial`

```text-plain
const material = new THREE.ShaderMaterial({
	vertexShader: {shader:string},
	FragmentShader: {shader:string}
})
```

### ShaderMaterial

Shader material is just a raw shader material with pre-pended common parameters

so no need to pass uvs and matrices in. Just a faster way of doing things. but this notes just tries to be verbose and get as many things as possible

Creating a boiler-plate Vertex Shader
-------------------------------------

```text-plain
void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}
```

The main function is the entry point of the shader. The `gl_Position` is the final global position of the vertices on screen. the `attribute vec3 position` is the object position taken from threejs  
each of the `matrices4` convert the `vec3 position` into clip space which is a vec4. 

*   model matrix is the pos, rot, scale transforms of the object
*   view matrix is the camera transforms
*   projection matrix is to convert it all to clips space

Creating a boiler-plate fragment shader
---------------------------------------

```text-plain
void main()
{
    gl_FragColor = vec4(0.5, 0.8, 1.0, 1.0);
    #include <colorspace_fragment> // for srgb
}
```

##### gl\_FragColor

This is the main variable you are calculating. this is the rgba color of the fragment

##### Precision

controlling how precise are your floats. you can set it by putting this at the top of your glsl file

*   highp : only for highperformance devices as 
*   mediump: should be your default
*   lowp: very performant but may have a lot of bugs

Note you dont need to do this if you are using ShaderMaterial rather than RawShadermaterial

Using Textures
--------------

First load the texture

```text-plain
const image = textureLoad.load('/path');
```

Then set it as a uniform for the shader

```text-plain
uniforms:{
	uTexture: image
}
```

Before we use can use in the fragment shader we need to set up the uvs in the vertex shader as a varying parameter to pass into the fragment

```text-plain
attribute vec2 uv; // this is a default attribute you can access already

varying vec2 vUv; // declare varying variable

void main()
{
    // ...

    vUv = uv; // assign the varying for the frabmetn shader
}
```

Then use in the fragment shader

```text-plain

uniform sampler2D uTexture; // get texture
varying vec2 vUv; // get uv

void main()
{
    vec4 textureColor = texture2D(uTexture, vUv); // this how you map the texture with uvs
    gl_FragColor = textureColor;
 // assign color
}
```