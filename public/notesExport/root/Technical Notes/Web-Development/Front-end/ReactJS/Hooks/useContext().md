# useContext()
**useContext()**
----------------

Instead of passing one prop from one child to the other. you can set a context where all of children elements gets access to one variable

**in parent**

```text-plain
// create a context outside of the function component
export const ContextData = React.createContext();

export default function ContextProvider ({children}) {
  // put context handling code here
  return m
    <ContextData.Provider value={props to pass down}>
      {children}
    </ContextData.Provider>
  )
}
```

outside of component fucntion. just create a context object.

then create a new element that wraps over the children you want to pass down. which is the context variable name with ".Provider". also pass down the data to the "value" attribute.

**In child**

```text-plain
import React, {useContext} from 'react'; // import react and use context hook
import {ContextData} from '../path/to/contextCreatedFile'; // import context

class ComponentName extends React.Component {
  const contextData = useContext(ContextData);
  render() {
    return (
      <div>
        {contextData}
      </div>
    )
  }
}
```

**Creating a context component**
--------------------------------

This is literally just declutter and streamline how contexts are written

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {useContext} from 'react';

export const Context = React.createContext();

export function useCreatedContext(){
  return useContext(Context);
}

export default function ContextProvider ({children}) {
  // put context handling code here
  return (
    <Context.Provider value={props to pass down}>
      {children}
    </Context.Provider>
  )
}
```

create a new component and setup the context.

you can use {children to render children}

use this component to handle setting/updating the theme

create new public/exported function to allow other js files to get context data.

**Updating context data**

use useState and pass the data and setData functions through the context.

in parent component

```text-plain
export default function ParentComponent() {
  const [val, setVal] = useState();

  return (
    <Context.Provider value={[val, setVal]}>
      <childComponent/>
    </Context.Provider>
  );
}
```

in child component

```text-plain
export default function childComponent(){
  const [val, setVal] = useContext(Context);

  return (
    <div></div>
  );
};
```