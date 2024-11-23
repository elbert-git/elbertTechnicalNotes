# ES6
The modern Javascript
---------------------

Like the title says, it's a modern agreed upon amendment to the language. Bringing mechanics like arrow functions, let and const and async/awaits.

let and const and arrow fucntions
---------------------------------

See Javascript fundemantals: variables and functions

Asycn/Await
-----------

Allows a cleaner way of writing asynchronous code like for data fetching

```text-plain
async fucntion getDataFromDatabase(){
	const data = await fetch(url) // await pauses the function before letting the rest of the code run
	return data
}
```

### Top level awaits

Sometimes you want the code to just run with await from the get go. In deno I think you can have top level awaits without thinking to much but in node and browsers you need to wrap the initial code in some function.

```text-plain
const init = ()=>{const data = fetch({url})} // create the func
init() // call the fucnt
```