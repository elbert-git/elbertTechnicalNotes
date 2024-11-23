# (old)ThreeJS
ThreeJS![Image result for three js]((old)ThreeJS/image.png)
-----------------------------------------------------------

It's an javascript abstraction of webGL. Allows you to render 3D models beautifully in a website

### WebGL

A javascript API to draw triangles in an HTML Canvas. Utilizes the GPU as well. But it's very low level, almost on the GPU level. This is what ThreeJS abstracts.

Installation and setup
----------------------

### Downloading via script tag

```text-plain
<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
```

### Downloading via NPM

```text-plain
npm install three
```

### Creating the ThreeJS instance

```text-plain
import * as THREE from 'three';
```

Creating a basic scene
----------------------

Here's a quick boiler plate

To setup a three js file you need to setup:

*   create a threejs scene 
*   Create camera 
*   create renderer
*   create objects with a geometry and material
*   create an update function 
*   listen to screen resize events

### Creating a ThreeJS scene

```text-plain
const scene = new THREE.Scene()
```

A scene just a collection of objects like a .blend scene file.

### Creating a camera

```text-plain
const camera = new THREE.PerspectiveCamera(
	{fov},
	{aspectRatio},
	{optional: nearPlane},
	{optional: farPlane}
)
```

Above creates a perspective camera with an fov and aspect ratio. near and far planes are optional. See more about other camera types and camera controls here

### Create a renderer

```text-plain
// create renderer
const renderer = new THREE.WebGLRenderer();
// set renderer size
renderer.setSize( window.innerWidth, window.innerHeight );
// connect renderer to html canvas
document.body.appendChild( renderer.domElement );
```

To create a renderer renders the a scene and outputs an html canvas. 

### Creating Mesh Objects

A mesh object has 2 components. A material and geometry object. The object need to be added to scene to be rendered.

```text-plain
// create cube geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// create material 
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// create cube object from cube geo and material
const cube = new THREE.Mesh( geometry, material );
// add cube to scene
scene.add( cube );
```

There's a lot glossed over here lol. So here are the indepth articles

### Rendering and update loops

You can call render by 

```text-plain
renderer.render( scene, camera );
```

But that renders a single frame to the canvas once.  To create an interactive loop you need to create an update function to continuously loop

```text-plain
function animate() {
    // loop request new frame
    requestAnimationFrame( animate );

    // .... logic every frame
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // call a frame render
    renderer.render( scene, camera );
};
```

##### Clock for delta and elapsed time

```text-plain
// create clock time
const clock = new THREE.Clock()

// update loop
function animate() {
    // loop request new frame
    requestAnimationFrame( animate );

    // .... logic every frame
    cube.rotation.x += 0.01*clock.getDelta(); // transforms with delta time
    cube.rotation = clock.getElapsedTime()// runtime to drive animations

    // call a frame render
    renderer.render( scene, camera );
};
```

##### Canvas control

You will find that if you resize the window the render will go all stretched and wonky.  This is due to a mistmatched render size and canvas size. To mitigate this you need to add func on a a window resize event. (You would also need to update the camera render aspect ratio).

```text-plain
// on window resize. update cam and renderer sizes
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    // set pixel ration
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})#
```

##### Handling pixel ratio

Since Apple's retina display, device softwares will multiply the number of physical pixels. This is to achieve higher quality renders. Long story short just add this to your resize event listener

```text-plain
//set pixel ration
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
```

##### Handling fullscreen

It's fullscreening the canvas if you double click or calkl the fullscreen function.

Better Renders
--------------

*   [lighting]((old)ThreeJS/Lighting.md) 
*   [shadows]((old)ThreeJS/Shadows.md)
*   post processing

UX
--

*   performance 
*   optimisations
*   loading screen 
*   Loading managers

Miscellaneous Topics
--------------------

*   physics
*   [raycasting]((old)ThreeJS/Raycasting.md)
*   [Animating in ThreeJS]((old)ThreeJS/Animations.md)
*   [Debug GUIs]((old)ThreeJS/GUI%20helpers.md)
*   particles
*   [shaders]((old)ThreeJS/Shaders.md)
*   [3D text]((old)ThreeJS/3D%20text.md)
*   [Annotations]((old)ThreeJS/Creating%20Annotations%20and%20label.md)