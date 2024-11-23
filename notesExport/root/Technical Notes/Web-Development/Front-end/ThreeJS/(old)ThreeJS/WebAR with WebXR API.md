# WebAR with WebXR API
AR with WEBXR
-------------

This one was a doozy to figure out but here it is.

Important notes
---------------

### Using an AnimationLoop

normally you would use renderer.requestAnimationFrame(). But with XR session you need to use renderer.setAnimationLoop(). The set render loop supplies `timeStamp` and `frame` as variables so add those to your render loop arguments. The frame is required for hit-testing

```text-plain
renderLoop(timeStamp, frame){..// code every frame} 
```

### Transparent Renderer

Remember you need to make the renderer transparent to render over the camera

Checking AR compatibility
-------------------------

Checking XR compatibility

```text-plain
const isXR = navigator.xr ? true : false;
```

Checking AR compatibility. Note this is async

```text-plain
const isAR = await navigator.xr.isSessionSupported('immersive-ar');
```

You might wanna create an async init to run top level awaits

```text-plain
async function checkAR(){
  const isXR = navigator.xr ? true : false;
  const isAR = await navigator.xr.isSessionSupported('immersive-ar');
  return (isAR && isXR) ? true : false;
}
```

AR setup and teardown functions
-------------------------------

There are some lines you need to setup every time you go in and out of an AR session.

But first you need to enable xr

```text-plain
rederer.xr.enabled = true
```

Create setup and teardown functions

```text-plain
function onARSessionEnd(){
	renderer.getSession().removeEventListener('end', onArSessionEnd)
	renderer.setSession(null);
	
	//.. code here to return models to state before AR scene
}

function onARSessionStart(session){
	// ar session settings
	renderer.xr.setReferenceSpaceType('local')
	rendrerer.xr.setSession(session);
	// listen for session ending
	session.addEventListener('end', onARSessionEnd);	
	
	//.. code here to remove/add stuff into AR scene
}
```

Initiating AR
-------------

Creating the session options

```text-plain
const sessionOptions = {
	requiredFeatures: ['hit-test', 'dom-overlay'],
	domOverlay: {root: {htmlElement}}
}
```

You can remove the `dom-overlay` stuff if you don't want it. Then inititiate an AR scene with it

```text-plain
navigator.xr.requestSession('immersive-ar', sessionOptions).then(onARSessionStart);
```

❗ Remember to set the render loop m8 

### Leaving AR

You can just press the back button but you can also set a button to call the function

```text-plain
renderer.xr.getSession().end();
```

The hit-testing loop
--------------------

This is the main feature of AR. Raycasting into physical surfaces.

### Creating a reticle

The reticle can be any mesh. below is using a simple sphere.

```text-plain
// create reticle and add to scene
const reticle = new THREE.Mesh(
	new THREE.SphereGeometry(0.1, 8, 8),
    new THREE.MeshBasicMaterial({color: 0xFF0000})
)
// make ar not update transforms
reticle.matrixAutoUpdate = false;
// make invisible
reticle.visible = false;
// add to scene
scene.add(reticle)
```

The reticle's visibility is a simple way to check if you are shooting a surface detected.

### Hit-testing a surface

```text-plain
// hit testing vars
let hitTestSourceRequested = false;
let hitTestSource = null;

renderLoop(timeStamp, frame){
	//...
	
	if(frame){
		//vars
		const referenceSpace = renderer.xr.getReferenceSpace();
		const session = renderer.xr.getSession();
		
		// get request hitTest if not done so already
		if(hitTestSourceRequested === false){ //if not requested, create a request
			session.requestReferenceSpace('viewer').then(refSpace=>{
				session.requestHitTestSource({space: refSpace}).then((source)=>{
					hitTestSource = source
				})
			})
			//on session end nullify the hitTest vars
			session.addEventListener('end', ()=>{
				hitTestSourceRequested = false;
				hitTestSource = null;
			})
			// mark as gotten hittest
			hitTestSourceRequested = true;
		}
		
		// process hitTest if got a surface
		if(hitTestSource){
			const hitTestResults = frame.getHitTestResults(hitTestSource);
			if(hitTestResult.length){
				const hit = hitTestResult[0];
				reticle.visible = true; // show reticle
				// match reticle ot hit transforms
				reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix)
			}
		}
		else{ // no hits make reticle invisible
			reticle.visible = false
		}
	}
	
	//...
	
	// ... remember to render the scene
}
```

Listening for screen taps
-------------------------

WebXR treats the screen tap as a controller. 

### Creating an onTap callback

```text-plain
function onTap(){
	if(reticle.visible){reticle.matrix.decompose( // only spawns if reticle is visible
		objToSpawn.position,
		objToSpawn.quaternion,
		objToSpawn.scale,
	);
}
```

Screen is commonly used to spawn the object if reticle is visible. But you can use a button to call this func

### Creating the controller and listening for taps

```text-plain
const screenController = renderer.xr.getController(0);
screenTapController.addEventListener('select', onTap);
//add to scene
scene.add(screenTapController);
```

Sources
-------

*   ar hit test youtube playlist tutorial
    *   Playlist: [https://www.youtube.com/playlist?list=PLFky-gauhF45UADAbdYMla\_Gl4uz9O-Lh](https://www.youtube.com/playlist?list=PLFky-gauhF45UADAbdYMla_Gl4uz9O-Lh)
    *   check AR compatibility: [https://www.youtube.com/watch?v=YE2eTsELHhM](https://www.youtube.com/watch?v=YE2eTsELHhM)
*   ar hit test article tutorial  
    [https://medium.com/sopra-steria-norge/get-started-with-augmented-reality-on-the-web-using-three-js-and-webxr-part-1-8b07757fc23a](https://medium.com/sopra-steria-norge/get-started-with-augmented-reality-on-the-web-using-three-js-and-webxr-part-1-8b07757fc23a)
*   code sources for ar hit test demo  
      - [https://github.com/mrdoob/three.js/blob/dev/examples/jsm/webxr/ARButton.js](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/webxr/ARButton.js) (ar button)  
      - [https://github.com/mrdoob/three.js/blob/master/examples/webxr\_ar\_hittest.html](https://github.com/mrdoob/three.js/blob/master/examples/webxr_ar_hittest.html)