# React and Typescript
> How to use TypeScript with React... But should you?  
> [https://www.youtube.com/watch?v=ydkQlJhodio&t=5sj](https://www.youtube.com/watch?v=ydkQlJhodio&t=5s)

Read what is typescript [first](../../Javascript/Typescript.md)

**Generally…**
--------------

There isn't must to learn. you just have the option of typing variables so that intellisense can help you more.

**Creating a Typescript React project**
---------------------------------------

You can use create react app by specifying the typescript template or use vite. IMO just use [vite](../Vite.md)

```text-plain
npx create-react-app app-name --template typescript
```

```text-plain
npm init vite
```

**Default File Extensions**
---------------------------

Code ends with `.tsx` instead of  `jsx.` 

**Types in function components and props**
------------------------------------------

The fucntion component type is `FC` in react. this is the basic react element type.

```text-plain
import {fc} from 'react';

// we just added `:FC` to mark this func returns an FC
export default function ComponentName:FC(prop){
	return(<h1/>)
}
```

**Types in props**
------------------

By default props are any. And the only known variable in is prop.children. But you can define an interface for props.

```text-plain
import {fc} from 'react';

// defining the prop interface
interface someProp{
	foo: number, // expects a number called foo
	bar?: string  // could have a string called bar
}

export default function ComponentName:FC(prop){
	return(<h1>prop.foo + prop.bar</h1>)
}
```

**Using the prop**

This allows you to mark what prop are required or available. Helps intellisense also signal to you how to use this prop.

```text-plain
<ComponentName foo=23 bar="hello"/>
```

**Types in state**
------------------

Most of the time typescript will infer the state by the default type. But in the case when you are inputiing a null state you can cast the state by doing this

```text-plain
const [data,setData] = useState<dataType>(null)
```

You can also put interfaces in to put a template object