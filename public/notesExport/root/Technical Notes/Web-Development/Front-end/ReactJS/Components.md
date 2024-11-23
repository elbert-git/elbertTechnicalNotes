# Components
**The Component**
-----------------

Simply create fucntion that return html.

```text-plain
export default function ComponentName(){
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```

Then you import that function where you need that component in the code.

```text-plain
import ComponentName from  './src/componentName.js';
//...
return(
  <ComponentName/>
)
```

**Props**
---------

Allowing attributes to be passed to the component changing how it renders

```text-plain
export default function ComponentName(propObjectName) {
  return (
    <div>
      {/*this is how you pass prop values to render*/}
      here is the prop {prop.propName} 
    </div>
  )
}
```

Then you set props by creating html attributes of the same name

```text-plain
<ComponentName propName=value />
```

A common shorthand for this is putting an object into fucntion argument

```text-plain
export default function componentName({propName}) {
  return (
    <div>
      {/*this is how you pass prop values to render*/}
      here is the prop {propName} 
    </div>
  )
}
```

**Passing children components**

```text-plain
export default function componentName({childen}) {
  return (
    <div>
      {children}
    </div>
  )
}
```

**Styling components**
----------------------

To use css classes like usual

```text-plain
<div className="classA classB classC"></div>
```

But you can also create styles in the app. Not recommended though, heard it's not performant

```text-plain
export default function componentName({childen}) {
  const styleObject = {backgroundColor: "red"}
  return (
    <div style={{styleObject}}>
      {children}
    </div>
  )
}
```

**Rendering loops**
-------------------

you can loop over a json/array to display a lot of data.

**the map function**

```text-plain
return(
 array.map(obj => {
 return <div attribute=obj.value propName=obj.value key=uniqueid/>};
)
```

See a clear explanation of the map function [here](../../Javascript/Array%20Methods.md)

**unique keys**

when using the map array. react needs unique id to all the elements. this lets react know which element has changed so that it can only render that element. it also just prevents weird bugs.

simplest way is to just add an index to the arrray object. but this isnt ideal for many situations

you can use the **uuid package** from npm to easily solve this issue

**first install uuid**

```text-plain
npm install uuid --save-dev
```

**import to the file that creates desired array to be mapped over.**

this will allow you to create new unique ids with a simple func

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

return(
 array.map(obj => {
 return <div attribute=obj.value propName=obj.value key={uuidv4()}/>};
)
```