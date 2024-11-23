# Post-Processing
Making it ‘pop’
---------------

Effects and make the final polish of a rendered image, like bloom and AO

Using post-processing
---------------------

```text-plain
// imports
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

// create effect composer and pass
composer = new EffectComposer( renderer );
composer.addPass( new RenderPass( scene, camera ) );

// attach an affect to composer
const effect1 = new ShaderPass( DotScreenShader );
effect1.uniforms[ 'scale' ].value = 4; // effect settings
composer.addPass( effect1 );
```