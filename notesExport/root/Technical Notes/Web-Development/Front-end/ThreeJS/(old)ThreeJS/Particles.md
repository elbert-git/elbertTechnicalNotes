# Particles
Particles
---------

In ThreeJS, particles are bunch of tiny points that are simple plane billboards

Creating particles
------------------

First create a buffer geometry

```text-plain
const particleBufferGeo = new three.BufferGeometry();
```

Then create a float 32 array of  the positions

```text-plain
const particleCount = 500
const particlePosition = new Float32Array(particleCount * 3)
for (let index = 0; index < particleCount * 3; index++) {
	particlePosition[index] = Math.random()
}
particleBufferGeo.setAttribute('position', new three.BufferAttribute(particlePosition, 3))
```

The float 32 array are all the particles xyz positions in one dimensional array. so like xyzxyzxyzxyz

Then create the particles material

```text-plain
const particlesMat = new three.PointsMaterial();
particlesMat.size = 0.02
particlesMat.sizeAttenuation = true;
```

Then you can just create the particles and add it to the scene

```text-plain
const particlesFromBufferGeometry = new three.Points(particleBufferGeo, particlesMat);
this.scene.add(particlesFromBufferGeometry)
```

Particle settings
-----------------

|     |     |
| --- | --- |
| size | well… the size lmao |
| sizeAttenuation | if the particles scale up as the cameras get closer |