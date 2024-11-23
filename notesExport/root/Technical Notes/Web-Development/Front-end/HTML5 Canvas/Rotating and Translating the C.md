# Rotating and Translating the Ctx
Rotating and Translating the Ctx
--------------------------------

You can literally rotate and translate the initial ctx grid. like adding an offset group of sorts. This allows you to easliy rotate and offset the shapes you have draw

```text-plain
ctx.save() //saves current ctx state

//do the transformations
ctx.translate(x, y);
ctx.rotate(angleDeg);

// draw you shapes

ctx.restore(); //restores the ctx back to when you saved
```