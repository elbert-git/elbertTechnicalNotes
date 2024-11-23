# useEffect()
**useEffect()**
---------------

Function that will run when something happens. A "side-effect"

It is basically an event listener on changing data

```text-plain
useEffect(()=>{
  // code of func here
},[])
```

It depends on the second argument of the fucntion. the "dependency array". the fucntion runs every time the array changes

**As an "on Start" fucntion**

You can use it as an "on-start" function when the dependency array is empty. Since the empty array will never change the func will only run once

**Loading async data**

you can use useEffect as to fetch data on start

```text-plain
useEffect(()=>{
  const load = async function(){//load async data}
  load();
},[])
```

Component exit
--------------

You can have a clean up code when you exit a component. like removing event listener from code

```text-plain
useEffect(()=>{
  // effect code
  
  // on component exit 
  return ()=>{} // this function will run on component exit
},[])
```