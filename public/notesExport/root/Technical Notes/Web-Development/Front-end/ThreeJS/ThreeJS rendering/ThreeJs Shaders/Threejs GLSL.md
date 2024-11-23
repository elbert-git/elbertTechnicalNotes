# Threejs GLSL
open GL Shading Language. A variant of C for graphics programming

Syntax
------

### Comments

```text-plain
// this is a comment

/*
this is a multi
line comment
*/
```

### Variables

it's a typed language so it goes like

```text-plain
type varName = value;
```

converting types is just

```text-plain
{type}({value})
```

for example `float(32)`

### Functions

yes there are functions. so just type them like this and create them

```text-plain
void sum(int a, int b)
{
    return a+b;
}
```

Built-in GLSL functions
-----------------------