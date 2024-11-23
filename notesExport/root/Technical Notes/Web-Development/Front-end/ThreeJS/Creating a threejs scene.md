# Creating a threejs scene
Creating a threejs scene
------------------------

This is a pretty lengthy setup. That involves

*   creating a threejs canvas
*   creating the scene
*   creating camera
*   creating the renderer 
*   handling the resizing of the canvas
*   creating the objects you need
*   Possibly creating orbit controls of the camera too

So just copy this boiler plate lmao and use it as so

```text-plain
const threeCanvas = new ThreeCanvas(document.getElementById("threeCanvas"));
```