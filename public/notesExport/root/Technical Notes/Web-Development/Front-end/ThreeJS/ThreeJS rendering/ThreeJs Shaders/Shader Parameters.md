# Shader Parameters
Creating controls for the shader

Attribute and Varying Parameter
-------------------------------

Creating varitions within vertices of an object. Honestly these are like vertex props. tied to per object's vertices rather than the material

### Attributes

To create an attribuet you have to create a float32 array. each element for each vertex.

```text-plain
const count = geometry.attributes.position.count //get vertex count
const attributeArr = new float32(count)
for(let i = 0; i < count; i++){
	attributeArr[i] = math.random(); //create values of positions
}
geometry.setAttribute('aAttributeName', new three.BufferAttribute(randoms, 1)) //create the attribute
```

To access the attribute in the vertex shader simply declare it in the shader

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute float aRandom;

void main()
{
	float randomVal = aRandom;
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0)
}
```

### Varyings

This is an attribute that is passed into fragment shader. 

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute float aRandom;

varying vRandom; // declarea a varying attribute

void main()
{
	// allow fragment shader access to attribute
	vRandom = aRandom; // assighn a varying attribute. 
	
	float randomVal = aRandom;
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0)
}
```

in fragment shader

```text-plain
const material = new THREE.RawShaderMaterial({
	vertexShader: {shader:string},
	FragmentShader: {shader:string},
	uParameter: {value: 10} // <- here
})
```

Uniforms
--------

These are the usual shader parameters you think. these are consistent parameters across all vertices. These are tied to the materials rather than to the object

first you need to create the uniform in the material

```text-plain
const material = new THREE.RawShaderMaterial({
	vertexShader: {shader:string},
	FragmentShader: {shader:string},
	uParameter: {value: 10} // <- here
})
```

then in the shader you can access it by declaring it in the glsl files

```text-plain
uniform float uParameter;
```

in js you can update the uniform via

```text-plain
material.uniforms.uParameter.value = new value
```

Most common use of this is updating a uTime. to create shader animations