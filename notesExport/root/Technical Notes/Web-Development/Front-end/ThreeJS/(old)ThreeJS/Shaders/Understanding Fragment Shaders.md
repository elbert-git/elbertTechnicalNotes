# Understanding Fragment Shaders
Fragment shaders
----------------

They are the shaders that actually do the ‘shading’. They take in the vertex positions and define the logic to colour them on screen

Precision
---------

At the top of fragment shaders you can set the precision level. 

```text-plain
precision mediump float; // can be highp or lowp 
```

You can think of it as a quality setting nob. the higher the better but slower.

Most of the time medium is okay. only set otherwise when you need to

The `gl_FragColor`
------------------

Similar to gl\_Position. They set the color for the vertex. this is the main value to set in the function.

```text-plain
gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0); // produces the colour purple
```