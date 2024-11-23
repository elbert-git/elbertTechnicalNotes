# OOP in ThreeJS
OOP in ThreeJS
--------------

Making the code more re-usable and partitioned to use. 

##### Example (global canvas class)

The most useful example is to just create a class to manage the window resizing and allows reference to the canvas sizes

```text-plain
export default class Sizes
{
    constructor()
    {
        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        
        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        })
    }
}
```

Accessing objects tips
----------------------

In threeJS you will be manipulating a lot of objects. Some objects will need to accessed very frequently. Having a bunch of random references can get quite messy. So here are a few tips to better reference common objects

### Making a global class instance

Pretty sure there are some things you want to be globally accessible like the camera, renderer and canvas. to make it global in a class just do 

```text-plain
class someClass{
	constructor(){
		window.varName = this;
	}
}
```

This will not please everyone as global variables can get buggy in much larger projects

### Making a singleton

Best compromise solution of the above without dirtying a much larger project with global variables

```text-plain
let instance = null

export default class Experience
{
    constructor(canvas)
    {
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
  
    }

}
```

Common objects you can create
-----------------------------

*   Canvas resize class; like above. but you can create an all render and canvas class
*   time class: to handle runtime and delta time
*   world class: to contain all the objects in side (prevents crowding the experience class);

* * *

*   hoping to create something similar to unity's ECS where it's a bunch of objects and monobehaviours.