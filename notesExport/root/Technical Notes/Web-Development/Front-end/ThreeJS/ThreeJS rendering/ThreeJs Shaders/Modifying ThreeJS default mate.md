#  Modifying ThreeJS default material shaders
Using Material hooks
--------------------

There is a function hook onBeforeCompile for materials. We are going to use that to edit the shader to inject our own shader code

```text-plain
material.onBeforeCompile = (shader) => {

    shader.vertexShader = shader.vertexShader.replace(
        `#include <common>`,
        `

			// inject modified code here
        `
    )
}
```

This is a hack 
---------------

I recommend only using this when you are very adept at shaders