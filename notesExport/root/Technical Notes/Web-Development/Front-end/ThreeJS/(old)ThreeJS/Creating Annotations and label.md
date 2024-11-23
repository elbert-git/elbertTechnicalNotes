# Creating Annotations and labels
Creating Annotations
--------------------

Creating html DOM elements that can appear on top of the canvas tracked to the model in screenspace. It can also hide between models. It works by converting a point into 2d screen space. Also checking they are being occluded by models using raycasts

Setup
-----

### Create the HTML overlay with CSS

Create an overlay layer in html. (css overlay) then in js make sure it can be creating 

### Create a 3D position Vector object to represent 3d positin

```text-plain
const pointPos = new THREE.Vector(3,1,3);
```

### Convert to normalized screen space

```text-plain
const screenPosition = point.position.clone()
screenPosition.project(camera)
```

Note that you need clone the position vectors because the operation changes the values

### Convert to absolute screen space

```text-plain
const translateX = (screenPosition.x + 0.5) * {canvasWidth}
const translateY = (-screenPosition.y + 0.5) * {canvasHeight} 
elDomPoint.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
```

Goes without saying this operation needs to happen every frame. and use css classes to toggle visibility on and off

Checking visibility
-------------------

This how to check if they should be occluded by the model

```text-plain
// loop over the points
for(const point of points)
    {
    	// check align screen position
        const screenPosition = point.position.clone()
        screenPosition.project(camera)


		// shoot raycast
        raycaster.setFromCamera(screenPosition, camera)
        const intersects = raycaster.intersectObjects(scene.children, true)


		// check raycast
		// if no intersection, make visible
        if(intersects.length === 0)
        {
            point.element.classList.add('visible')
        }
        else // have intersection
        {
        	// compare intersect point distance to distance from cam and point
            const intersectionDistance = intersects[0].distance
            const pointDistance = point.position.distanceTo(camera.position)


			// if intersection is closer, point is occluded

			// make invisible
            if(intersectionDistance < pointDistance)
            {
                point.element.classList.remove('visible')
            }
            // else make visible, point is not occluded
            else
            {
                point.element.classList.add('visible')
            }
        }
    }
```