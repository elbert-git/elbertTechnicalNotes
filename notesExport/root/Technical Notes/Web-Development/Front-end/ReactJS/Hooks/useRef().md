# useRef()
**useRef()**
------------

useRef() is essentially like a state that doesn't update the ui when you update it. It's a variable that persists between renders. But also commonly used as pointer to an html element

Usage
-----

```text-plain
import {useRef} from 'react';

export default function customReactComponent (prop) {
  const timesRendered = useRef(0);
  
  useEffect(()=>{
  	//this is how you update the value of the reference
  	timesRendered.current += 1
  }, [])

  return (
    <div>
      here is the prop {prop.propName} 
    </div>
  )
}
```

Using it to point to HTML Elements
----------------------------------

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {useRef} from 'react';

export default function customReactComponent (prop) {
  const varForElementName = useRef();

  return (
    <div ref={varForElementName}>
      here is the prop {prop.propName} 
    </div>
  )
}
```

you import useRef from react

create a var and set it to useRef()

in the element you want it to reference

give an attribute ref with the value of the variable name

**useRef() through children**

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {useRef} from 'react';

export default function customReactComponent (prop) {
  const varForElementName = useRef();

  return (
    <div >
      <parent refHook={varForElementName}/>
    </div>
  )
}
```

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {useRef} from 'react';

export default function customReactComponent (prop) {
  return (
    <div ref={prop.refHook}></div>
  )
}
```