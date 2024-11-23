# Basic Fragment Shader Recipes
Basic Recipes
-------------

For the commons stuff and these should be your basic buidling blocks to making comples visual shader

Just UVs
--------

### Visualising UVs

```text-plain
gl_FragColor = vec4(vUv, 0.0, 1.0);;
```

### Gradients

Change the x or y when you need

```text-plain
float strenth = vUv.x // v for value or brightness
gl_FragColor = vec4(strength, strength, strength ,1.0)
```

Making Lines and grids
----------------------

### Modulo gradient

This is just the gradient ran througha modulo formula

```text-plain
float strength = mod(vUv.y * 10.0, 1.0)
gl_FragColor = vec4(strength, strength, strength ,1.0)
```

### Row of lines

It's just the modulo gradient with a step function

```text-plain
float strength = mod(vUv.y * 10.0, 1.0);
strength = step(0.5, strength);
```

### Grid of Lines

You add a verticle and 

```text-plain
float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
strength += step(0.8, mod(vUv.y * 10.0, 1.0));
```

### Grid of Squares

The above but multiply to get cross intersections

```text-plain
float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
```

Note you can mess with the step functions rectangles

```text-plain
float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
```

### Grid of crosses

Just above but with offset rectangles

```text-plain
float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
float strength = barX + barY;
```

Mirror Gradients (Squares and Crosses)
--------------------------------------

Creating a gradient from center

### Mirrored Gradient

```text-plain
float strength = abs(vUv.x - 0.5);
```

### Double Mirrored gradients

If you can use `min()` and `max()` you can get cross and square generators

### Cross Generator

Just the x and y mirrored gradients but overlayed on each other

```text-plain
float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
```

### Square Generator

```text-plain
float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
```

*   Note just remember to run them thourh a step function

Pixelated Gradients
-------------------

This is all about using the `floor()` function. this makes it floats into stepped integers

```text-plain
float strength = floor(vUv.x * 10.0) / 10.0;
```

Creating Random Noise
---------------------

There is no random but you can create a random pattern which is close enough. This ia fucntion that you can use to get a random pattern/texture

```text-plain
float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}
```

### Creating a random pixelated grid

you can also create random pixelated grid by passing a griddeed UV into the random fucntion

```text-plain
vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
float strength = random(gridUv);
```

Circles
-------

this is just using the lengt function from zero

### Corner Gradient

```text-plain
float strength = length(vUv);
```

### Center Gradient (circle)

```text-plain
float strength = distance(vUv, vec2(0.5));
```

You can step this to create a circles

More fun with circles
---------------------

### Creating a lens flare

```text-plain
float strength = 0.015 / (distance(vUv, vec2(0.5)));
```

### Creating a sparkle

first create a streched flare

```text-plain
float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
```

Then you overlay 2 perpendicular of the above

```text-plain
float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));
```

### Creating a donut

first create a gradient

```text-plain
float strength = abs(distance(vUv, vec2(0.5)) - 0.25);
```

then step it

```text-plain
float strength = step(0.02, abs(distance(vUv, vec2(0.5)) - 0.25));
```

Rotating UVs
------------

You can create a rotate uv function

```text-plain
vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}
```

The rotation is in radians so you might wanna create an angle converter. you first need to define pi. Put the below at the top of you main func. this is kinda declaring a constant

```text-plain
#define PI 3.1415926535897932384626433832795
```

Wavy Uvs
--------

```text-plain
vec2 wavedUv = vec2(
    vUv.x + sin(vUv.y * 30.0) * 0.1,
    vUv.y + sin(vUv.x * 30.0) * 0.1
);
```

Radial Gradients
----------------

This is almost kind of like a radial uv

```text-plain
float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
```

you an also make it repeating by sine-ing the pattern

```text-plain
float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
float strength = sin(angle * 100.0);
```

Perlin noise
------------

```text-plain
// definei missing func permute
vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//
vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

float scale = 10.0;
float strength = cnoise(vUv * scale);
```