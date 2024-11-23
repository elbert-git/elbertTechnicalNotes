# Handling textures
*   dfload textures
*   pass in as a shader attribute
*   pass uv data from vertex to fragment
*   using  2d texture sampler

Using Texture in shaders
------------------------

Load the texture in threeJS

```text-plain
const texture = textureLoader.load('path/to/texture')
```

Pass the texture into the shader as an attribute

```text-plain
const material = new THREE.RawShaderMaterial({
    // ...
    uniforms:
    {
        // ...
        uTexture: { value: flagTexture }
    }
})
```

Pipe the threejs UV data to vertex, then to fragment

```text-plain
// access uv from threejs
attribute vec2 uv;


// create varying var fro fragment
varying vec2 vUv;

void main()
{
    vUv = uv; // set the varying value to pass down
}
```

then now you can sample the texture on the surface

```text-plain
precision mediump float; // presicion set

uniform vec3 uColor;
uniform sampler2D uTexture; // get sampler function from threeejs

varying vec2 vUv;

void main()
{
    vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = textureColor;
}
```

Note that the sampler returns a vec4. the rgba. you can edit it as you need to before you return the gl\_FragColor.