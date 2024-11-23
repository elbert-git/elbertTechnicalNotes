# ToneMapping
Tone-mapping
------------

I think it's like colour grading. But I used this to brighten up the whole render when using just an hdri

```text-plain
// importing 
import { WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding } from "three";

//setup tonemapping
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1; // this controls the exposuer
// output encdoding 
renderer.outputEncoding = sRGBEncoding;
```