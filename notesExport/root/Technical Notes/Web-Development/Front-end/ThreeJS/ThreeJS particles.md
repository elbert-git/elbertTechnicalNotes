# ThreeJS particles
Creating particles
------------------

The quickest way is to create a mesh and have every vertext of that mesh to be a particle

```text-plain

// create mesh

const planeGeo = new three.PlaneGeometry(1, 1, 32,32)
// create material
const pointsMaterial = new three.PointsMaterial({
	size:0.02,
	sizeAttenuation: true
})
// create the particles object
const particles = new three.Points(
	planeGeo,
	planeMaterial
)
```

Creating with Buffer Geometries
-------------------------------

Buffer geos in this context are just meshes where we set the position of each vertex

```text-plain
// create geo
const geo = new three.BufferGeometry()

// create vertices and their positions
// in this case by random
const count = 512;
const positions = new Float32Array(count*3)
for(let i = 0; i < count * 3; i++){
	positions[i] = (Math.random() - 0.5) * 10;
}
geo.setAttribute('position', new three.BufferAttribute(positions, 3))
```

You can also create an attribute for color as well

```text-plain
for(let i = 0; i < count * 3; i++){
	colors[i] = Math.random() // normalised 0-1
}
geo.setAttribute('color', new three.BufferAttribute(colors, 3))
particlesMaterial.vertexColors = true
```

note that the color of the particle still matters

```text-plain
pointsMaterial.color = new THREE.Color('#ff88cc')
```

Animating and updating Particles
--------------------------------

While you can update each float 32 arrays each frame. that's very computationally expensive. Best to use [shaders](ThreeJS%20rendering/ThreeJs%20Shaders.md)

### Shader tricks only for particles

There are specific things you need to keep in mind when working with particles and shaders

##### Particles Size

whatever you set the particle size to be you need to modify it with one more line

```text-plain
gl_PointSize *= (1.0/-viewPosition.z);
```

##### Particle UV

You can access the uv of a singular particle by referencing `gl_PointCoord` in the fragment shader