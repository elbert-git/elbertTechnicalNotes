# HTML5 Canvas
General
-------

The main way of drawing 2D graphics in html. WebGL also uses this to draw 3D shapes. It works by using the context object. See below for more information

Creating a canvas
-----------------

```text-plain
<canvas id="canvas" width="1024" height="1024">
	inside will render if canvas doesn't work in browser. Treat inside as fallback content
</canvas>
```

Just create the canvas in html then get the element in javascript. If the browser doesn't support canvas it will just render the content inside the tag

### The resize method

If you resize the canvas stretch the proportion of the pixels inside. so you would need to call this.

```text-plain
window.addEventListener('resize', ()=>{
	canvas.width = {canvasWidth};
	canvas.height = {canvasHeight};
})
```

 note that this clears the canvas.

The Context Object
------------------

After creating the canvas, next is getting the context object. 

```text-plain
ctx = document.querySelector('canvas').getContext('2d');
```

This is like a pen object or a 3D cursor. Anything you create spawns from the coordinates of this object

More stuff
----------

 [https://www.youtube.com/c/Frankslaboratory](https://www.youtube.com/c/Frankslaboratory)

See the guy above for particles and physics and advnaced canvas