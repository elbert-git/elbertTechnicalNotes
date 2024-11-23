# Cameras and Camera Controls
Camera types
------------

There a lots of them but the mains ones you will use are:

*   Perspective camera 
*   Orthographic

But there are more like

*   Array camera (splitscreen views)
*   StereoCamera (3D eyes)
*   CubeCamera (HDRI Capture)

### Creating an Orthographic Camera

just supply the top,bottom,left,right limits to capture the near and far clip planes

```text-plain
const camera = new THREE.OrthographicCamera( 
	width / - 2,
	width / 2,
	height / 2,
	height / - 2,
	1,
	1000 );
scene.add( camera );
```

Camera Controls
---------------

You obviously can just write your own Camera controller logic in the update. But there are some classes that already did the work for you

*   Fly (flying first person)
*   DeviceOrientationControls(Phone gyro)
*   Firstperson(first personl)
*   pointerlock(keeps mouse centered but sends mousemove events to camera)
*   Orbit control
*   trackball

Common methods
--------------

### Camera.lookAt()

Not unique to cameras but applies to all object3Ds

```text-plain
camera.lookAt({vec3})
```

Aims the forwardVector to the vector 3