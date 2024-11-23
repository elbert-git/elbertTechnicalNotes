# Common Shadertoy tricks
UV stuff
--------

### Creating a UV

currentCoordinate/resolution

```text-plain
vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
```

`iresolution.xy` is the resolution vector

### Centering the uv space

currentCoordinate/resolution

```text-plain
(uv * 2) - 1
```

### Maintaining Aspect Ratio

multiply uv.x by aspect ratio (resX/resY)

```text-plain
uv.x * = iResolution.x/iResolution.y 
```

Vector Stuff
------------

### Swizzling

basically just shorthands for manipulating vectors.  
Pretty intuitive when you get the hang of it

```text-plain
someVector3.xy = vec2(someVector3.x, someVector3.y)
someVector2 * 2 = vec2(someVector2.x * 2, someVector2.y * 2
```

### Length

get magnitude of vector

```text-plain
length(vec)
```

Can be used to make a circle

Signed Distance functions![](Common Shadertoy tricks_gfx18.)
------------------------------------------------------------

Functions that help form shapes. They createa gradient that increases outside of the shape and decreaseas inside of the shape. Like how a length from a center forms a circle. They are all well documented [here](https://iquilezles.org/articles/distfunctions2d/)

Gradient functions
------------------

### Step

It's like a threshold function. if lower than amount it will return one. if less then it will return 0

```text-plain
step({threshold}, {value})
```

### Smoothstep

Creates a gradient between 2 values and clips them

```text-plain
smoothstep({min}, {max}, value)
```

Creating glow with inverse values
---------------------------------

idk why but  this can create glow in a gradient

```text-plain
value = 1/value
```

usually 1 is waay too high and will blow out. so use something lower than one

```text-plain
value = 0.02/value
```

Gradient color palletes
-----------------------

It's just rgb lerp functions. from 1 input into rgb gradient. you can use these sites to help create them. 

*   [http://dev.thi.ng/gradients/](http://dev.thi.ng/gradients/)
*   [https://iquilezles.org/articles/palettes/](https://iquilezles.org/articles/palettes/)

Fract
-----

Thiis kind of like modulo. But helps loops values. Good for creating tilings

```text-plain
fract(uv)
```