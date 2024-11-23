# Importing Models
Importing gltfs
---------------

### Import loader

```text-plain
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
```

### Load the file

```text-plain
const loader = new GLTFLoader();

loader.load( 'path/to/model.gltf', ( gltf ) => {
    scene.add( gltf.scene );
  }
  undefined,
  ( error ) => {
    console.error( error );
  }
);
```

### A Note about URLs

Do note that you should put assets in the public folder. then assume public as the root folder to the url

### GLTF Variants

| Variant | Why choose it |
| --- | --- |
| gltf | it's a json of everything. you can edit some but not all |
| glb | very monolothic but easy and light to use. You can't edti the fiel though. it's just as is |
| gltf + texture and bin | Very open, it's unpacked as you need but it's very not efficient to develop for due to more files to wrangle. use this for maximum flexibility |

### Draco gltfs

gltf with better compressino algorithm. not really relevant for us right now.

Animation control
-----------------

ThreeJS has revamped the animation system to function like unity (mostly).

```text-plain
let importedMesh;

// Create an AnimationMixer, and get the list of AnimationClip instances
const mixer = new THREE.AnimationMixer( importedMesh);
const clips = mesh.importedMesh;

// Update the mixer on each frame
function update () {
	mixer.update( deltaSeconds );
}

// Play a specific animation
const clip = THREE.AnimationClip.findByName( clips, 'dance' );
const action = mixer.clipAction( clip );
action.play();
```