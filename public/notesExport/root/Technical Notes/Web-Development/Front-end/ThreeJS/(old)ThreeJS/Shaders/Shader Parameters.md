# Shader Parameters
Shader parameters
-----------------

These are the settings and argument you use to create a more versatile shader

Attributes
----------

They are values that change from vertex to vertex. Like uv and position. You define attributes in the threeJS buffer geometry

```text-plain
geometry.setAttribute('a_attributeName', new THREE.BufferAttribute(randoms, 1))
```

we put `1` as the last argument when it is a float/interger. use 2 and 3 for vec2 and vec3 respectively.

Here's how to access the attribute in the shader

```text-plain
attribute float a_attributeName;
```

### Default attributes

There are already default attributes in a ThreeJS geometry. Like: 

*   position
*   uv
*   normal

Varyings
--------

These parameters are called `varying` parameters. They are data passed between vertex to fragment shaders. 

Just define the variable like so

```text-plain
varying vec3 v_varName;
```

Then set the variable value somewhere in the vertex's main function. 

Then you can refer to variable in the fragment shader by defining it again

```text-plain
// in fragment shader
varying vec3 v_varName;
```

Uniforms
--------

Allowing external programs to control shader parameters. First you need to define the interface. below is defining one in js. note they are also consistent vertex to vertex.

```text-plain
// defining uniform interface in js
const uniformInterface = {
	u_propName : {
		type: 'f' // float
		value: {val} // <- update this value to tweak the shader
}
```

define the prop when you construct the shader material

```text-plain
 const material = new THREE.RawShaderMaterial({
 	uniforms: uniformInterface
    vertexShader: `shaderStringGoesHere`,
    fragmentShader: `shaderStringGoesHere`
})
```

Then echo the same variable name in the shader

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float u_propName

attribute vec3 position;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
}
```