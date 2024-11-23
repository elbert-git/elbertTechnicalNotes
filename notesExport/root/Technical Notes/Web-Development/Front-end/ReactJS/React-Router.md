# React-Router
**Routing**
-----------

source

[https://www.youtube.com/watch?v=Jppuj6M1sJ4](https://www.youtube.com/watch?v=Jppuj6M1sJ4)

### installation

```text-plain
npm install react-router-dom --save-dev
```

### Import

```text-plain
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
```

### Basic usage

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function ParentComponent (prop) {
  return (
    <BrowserRouter>
      <Link to="/path" >link to path</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<MissingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
```

3 nested compnentes

*   BrowserRouter > Routes> Route(your individual route)

Routes go in this format

default page for broken/missing routes

Linking

do note that only things within the tag update when you change routes

### Redirecting

many times you will want to switch pages by script

```text-plain
import {useNavigate} from 'react-router-dom';
let navigate = useNavigate(); // this returns teh navigate func
navigate('/path');
```

### Scroll 0

when you change routes in react. most of the time you want the scroll to be reset to the top.

just put a use effect on the component loaded that resets scroll to the top.

```text-plain
window.scroll(0,0);
```

### Url Parameters

you can encode data in the url

in BrowserRouter

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function ParentComponent (prop) {
  return (
    <BrowserRouter>
      <Link to="/path" >link to path</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile/:userID" element={<userProfile/>}/
      <Routes>
    <BrowserRouter>
  )
}
```

*   add a route where the path has a ":" that denotes the variableName for the paramenter

in component

```text-plain
import React, {useParams} from 'react';
import ReactDom from 'react-dom';

export default function componentName(){
  const URLparameters = useParams();
 
  return(
    <div>
      <h1>Hello {param.userID}</h1>
    </div>
  )
}
```

*   import the useParam() hook
*   use the fucn to return url parameters object.
    *   that object will contain your url parameters

### Nesting Routes

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function ParentComponent (prop) {
  return (
    <BrowserRouter>
      <Link to="/path" >link to path</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/*" element={<userProfile/>}>
          <Route path="book-title" element={<bookTitlePage>}/>
        </Route>
      <Routes>
    <BrowserRouter>
  )
}
```

*   add a route tag as child of one of the routes
*   put a '/\*' in front of the parent route path attribue
*   the child route tag path is relative to the parent route tag

#### The tag

controls where the nested routes will inject the children components

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {Outlet} from "react-router-dom";

export default function bookTitlePage(){
  return(
    <div>
      {// nested routes children will appear below}
      <Outlet/>
    </div>
  )
}
```

### Private Routes

essentially creating a new component. where it will conditionally render an outlet or rendersomething else or redirect to somewhere else

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function ParentComponent (prop) {
  return (
    <BrowserRouter>
      <Link to="/path" >link to path</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="book-title" element={<bookTitlePage>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

*   create a new route that renders your custom ProtectedRoutes Component
*   the children of this route tag are protected routes

```text-plain
import React from 'react';
import ReactDom from 'react-dom';
import {Outlet} from "react-router-dom";
import {useContext} from 'react';
import {AuthProvider} from '../pathToProvider';j
import {ErrorPage} from 'ErrorPage';

export default function ProtectedRoutes(){
  const user = useContext(AuthProvider);
  return(
    <div>
      {user ? return<outlet> : return <ErrorPage/>}
    </div>
  )
}
```

*   in the protected route component
*   use react context hook to get authorisation parameters
*   use the auth parameters to conditionally render the outlet

### ❗ Relative resource path issues with routers

set a basename for the BrowserRouter element. set it as the domain's subdirectory.

```text-plain
<BrowserRouter basename="/{subdirectory}/"></BrowserRouter>
```

```text-plain
<Link to="/path" >link to path</Link>
```

```text-plain
<Route path="*" element={<MissingPage/>}/>
```

```text-plain
<Route path="/" element={<elementName/>}/>
```