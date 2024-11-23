# Tracing shapes and lines
Tracing shapes and lines
------------------------

This will how you draw stuff. There is a whole collection of methods so here are some of the commons ones

### Drawing Lines

```text-plain
ctx.moveTo(x, y) //move to start of line
ctx.beginPath() //begins the trace
ctx.lineTo(x,y) //movest to next point
ctx.lineTo(x,y) //movest to next point
ctx.closePath();
```

Note you can draw custom polygonal shapes with this

### Drawing Rects 

```text-plain
ctx.rect(x, y, width, height);
```

### Drawing Circular Arcs

```text-plain
elCanvas.height = window.innerHeight;
elCanvas.width = window.innerWidth;
ctx.arc(x, y, radius, startAngleRad, endAngleRad, counterClockwiseBool);
```

Visualising the shapes and lines
--------------------------------

What you did above just saves the shape into memory. To actually show what you've drawn you need to fill or stroke the shape

```text-plain
ctx.stroke();
ctx.fill();
```

### Ctx styles: colors and width

You have to style before you draw

```text-plain
ctx.setLineDash([lineLength, gapLength])
ctx.strokeStyle = "red"; // this also effect fills.
ctx.lineWidth = 3; // in pixels
ctx.fillStyle = "#000000"
```