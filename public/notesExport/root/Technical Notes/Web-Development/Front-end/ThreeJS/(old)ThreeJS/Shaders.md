# Shaders
Shaders
-------

They are the programs that render images with 3D data. They are written as GLSL files. They process a lot of data like:

*   vertex positions
*   texture
*   light parameters
*   camera transformations and many more

Creating Shaders
----------------

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

There are 2 types of shaders as you an see

### Using ‘ShaderMaterial’

The above uses raw shader material. which is pretty plane. Use ShaderMaterial to have some sane default shader parameters and varyings

The below attributes, uniforms and varyings should be already set in the shaders. no need to define them again. Just use them as initated variables

*   uniform mat4 projectionMatrix;
*   uniform mat4 viewMatrix;
*   uniform mat4 modelMatrix;
*   attribute vec3 position;
*   attribute vec2 uv;
*   precision mediump float;

Vertex, Fragments and Parameters
--------------------------------

##### [Vertex Shaders](Shaders/Understanding%20Vertex%20Shaders.md)

Handle positionling vertices in 2D space. taking into consideration the vertex data and camera parameters

##### [Fragment shaders](Shaders/Understanding%20Fragment%20Shaders.md)

These color in portion of the screens. These actually shade the color in depending on the lights. Fragment shaders always run after vertex shaders.

Why bother with custom shaders
------------------------------

In most 3D contexts there are pre-made shaders given to you. Covering most needs. Things like a PBR shaders are uber shaders that cover everything you would most likely need. 

But these come at the expense of performance if you can write only what you need. Performance will be drastically improved. 

They also come in handy for very specific visual requirements

Futher reading
--------------

*   The Book of Shaders: [https://thebookofshaders.com/](https://thebookofshaders.com/)
*   ShaderToy: [https://www.shadertoy.com/](https://www.shadertoy.com/)
*   The Art of Code Youtube Channel: [https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg](https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg)
*   Lewis Lepton Youtube Channel: [https://www.youtube.com/channel/UC8Wzk\_R1GoPkPqLo-obU\_kQ](https://www.youtube.com/channel/UC8Wzk_R1GoPkPqLo-obU_kQ)