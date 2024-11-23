# GUI helpers
GUI helpers
-----------

Creating quick UI and Visualizations to help with development

##### lil.gui

Note that the usual library for this is dat.gui but that hasn't been update in awhile. So just use lil.gui instead

Installation and setup
----------------------

```text-plain
npm install lil-gui --save
```

then import it

```text-plain
// import
import * as dat from 'lil-gui';
// create instance
const gui = new dat.GUI();
```

Creating Sliders
----------------

it's generally follows the format of 

```text-plain
gui.add({property}, 'labelName');
```

### Dot chaining options

```text-plain
gui.add({property}, 'labelName'
	.min({val})
	.max({val})
	.step({val})
	.name('label');
```

Using the a custom parameter object
-----------------------------------

With a parameter object you can have buttons and colour pickers

Create a parameter object

```text-plain
const parameters = {
	color: 0xFF00FF, 	// add color for colour
	spin: ()=>{//code}  // for buttons on press
}
```

add to the gui

```text-plain
gui.add({paramObject}, label);
```

add an on change function

```text-plain
gui.add({paramObject}, label).onChange(() =>
    {
        material.color.set(parameters.color)
    })
```

List of GUIs
------------

GUIs can be :

*   range
*   color
*   text checkbox
*   select
*   button folder(for organizing UIs)