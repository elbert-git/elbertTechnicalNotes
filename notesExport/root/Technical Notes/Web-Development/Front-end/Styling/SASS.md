# SASS
Sass
----

An improved language of CSS. Just like how typescript extend javascript. So does SASS extend SASS.![Sass](SASS_logo-b6e1ef6e.svg) 

It allows:

*   nesting
*   imports
*   automatically translate to browser specific css
*   better variable support

**How it works**

Just like typescript there is a process running transpiling your `.scss` into `.css`.

Setup
-----

**Installation**

```text-plain
npm install -g sass
```

Or install locally

```text-plain
npm install sass -D
```

**Watching scss**

```text-plain
sass --watch path/to/sassFolder:/path/to/publicOutput/stylesheets
```

Variables
---------

```text-plain
$varName: value


body {

	property: #varName
}
```

Nesting
-------

```text-plain
selectorA{
  selectorB {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
```

The above operates the same way as `selectorA selectorB{}`. It's just a more ergonomic way of writing it.

**Pseudo elements and State**

So that states and pseudo classes don't spill everywhere

```text-plain
button{
	transition: 0.3s;
	&:hover{color:red}
	&::before{content: "button"}
}
```

Modules
-------

Bruh…. this is a game changer. This allows imports in css

```text-plain
@use 'path/to/file';
```

Mixins
------

Almost like functions. Helps reduce writing code duplication;

**Creating a mixin**

```text-plain
@mixin flex($align:flex-start, $justify:flex-start){
	display: flex;
	justify-content: $justify;
	align-items: $align	
}
```

**Applying a mixin**

```text-plain
.alignTopLeft{@include flex}
.alignBottomRight{@include flex($align:flex-end, $justify:flex-end)}
.alignCenter{@include flex($align:center, $justify:center)}
```

Extension and inheritance
-------------------------

You can create prototypes then inherit or extend

```text-plain
%message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
```

Below extends/overwrites the prototype

```text-plain
.message {
  @extend %message-shared;
}
.successMessage {
  @extend %message-shared;
  border-color: green;
}
.errorMessage {
  @extend %message;
  border-color: red;
}
.warningMessage {
  @extend %message-shared;
  border-color: yellow;
}
```

Operators
---------

```text-plain
.selector{
	property: math.div(val1,val2) * 100 + 2 - 1;
}
```

You can do maths now woop

|     |     |
| --- | --- |
| Addition | +   |
| Subtraction | \-  |
| Multiplication | \*  |
| Division | math.div(val1,val2) |

If-statements
-------------

bruv this is nuts

```text-plain
@mixin themeBG($theme){
	@if $theme == 'light'{background-color: $light-bg}
	@else {background-color: $dark-bg}
}
```

Functions and loops
-------------------

```text-plain
@function sum($numbers){
	$sum: 0;
	@each $number in $numbers{
		$sum: $sum + $number
	}
	@return $sum
}
```

Yes you saw above correctly… functions and loops