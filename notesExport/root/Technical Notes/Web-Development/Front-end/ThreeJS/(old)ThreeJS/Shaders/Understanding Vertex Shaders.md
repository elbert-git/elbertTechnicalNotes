# Understanding Vertex Shaders
Vertex Shaders
--------------

These help convert 3d vertex positions into 2D screen coordinates. Taking into consideration the model geometry, transforms and camera parameters. 

### The `gl_Position`

In threeJS all vertex shader does is set the gl\_Position. the variable that controls the vertex positions of the geometry.

The vertex boiler plate
-----------------------

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
}
```

Accessing external values
-------------------------

```text-plain
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
```

these are how you declare inputs into the program from threeJS. uniforms are the things that are consistent throughout the model. Atttributes are things that change from vertex to vertex

The main function
-----------------

This is the programs main entry point. In the boilerplate it's simply placing the mesh as is with it's transform. this is done by calculating the model position then the view positionand the final projected 2D posiiton. Then we assign the variable to final gl\_position. gl position is final 2D attribute the render uses. 

Crazy sine wave
---------------

```text-plain
modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
```

if you wanna do anything. on the local model level. You can do it in the model position level. the above creates a sine wave based on the x axis