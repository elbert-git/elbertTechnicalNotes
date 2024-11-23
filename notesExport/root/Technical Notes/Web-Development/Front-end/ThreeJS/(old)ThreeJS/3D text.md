# 3D text
The typeface format
-------------------

There is a specific type format to import in ThreeJS. it's a .typeface.json. You can use this site to convert the file 

> [https://gero3.github.io/facetype.js/](https://gero3.github.io/facetype.js/)

Importing the font
------------------

Use the font Loader

```text-plain
const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        console.log('loaded')
    }
)
```

Creating the text
-----------------

```text-plain

// create text geometry

const textGeometry = new THREE.TextGeometry(
	'Hello Three.js',
	{
		font: font,
		size: 0.5,
		height: 0.2,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 0.03,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 5
	}
)


// create mesh object

const textMaterial = new THREE.MeshBasicMaterial()
const textMesh = new THREE.Mesh(textGeometry, textMaterial)
scene.add(textMesh)
```