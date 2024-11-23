# Raw Shader material workflow
Raw shaders materials
---------------------

The common threejs shader material has a lot of attributes built in. This is just the common shader material just a bit more deconstructed to understand what's going on

##### TL;DR

it's a shader with more imports

Creating a RawShaderMaterial
----------------------------

Then you create the material either using `RawShaderMaterial`

```text-plain
const material = new THREE.RawShaderMaterial({
	vertexShader: {shader:string},
	FragmentShader: {shader:string}
})
```

Creating a boiler-plate Vertex Shader
-------------------------------------

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
attribute vec3 position;
void main()
{
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0)
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
precision mediump float;
void main()
{
	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0)
	
	// use srgb color space
	#include <colorspace_fragment>;
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