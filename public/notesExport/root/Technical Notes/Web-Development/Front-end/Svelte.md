# Svelte
In Gener![File:Svelte Logo.svg - Wikipedia](Svelte_1200px-Svelte_Logo.svg.)al
-----------------------------------------------------------------------------

Another javascript UI framework. It's call to fame is that it compiles the code into plain javascript and is a lot closer to just plain javascript.

Incstall and setup
------------------

Just use vite lmao don't sweat it

General Intuition
-----------------

### Structure

All svelte components end in `.svelte`. Has a similar structure to Vue where it's divided into parts

```text-plain
<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<style lang="scss">
	button{padding: 1rem;}
</style>

<button on:click={increment}>
  count is {count}
</button>
```

### States

`let` variables are states already

### Events

Functions itselfs are events and you can set event by setting the `on:` attribute (see above)

### Conditional Rendering

```text-plain
{#if count > 0}
	<div>More than 0</div>
{/if}
```

### Loops

```text-plain
{#each dataArray as data}
	<div>rendering {data}</p>
{/each}
```

Props
-----

preparing a child to receive prop

```text-plain
<script>
	export let propName;
</script>

<div>
	{propName}
</div>
```

Then in parent to set the prop

```text-plain
<component propName={data} />
```

### Using objects as props

This just helps to keep things clean

```text-plain
<component {...allProps} />
```

This just keeps things clean. make sure the object shape matches all propnames

Context
-------

Kind of like useContext, a global state you can refer to. This is stupidly simple it's magic

```text-plain
// in parent
setContext('propName', {value})
// in 
const propName = getContext('propName')
```

Stores
------

This kind of a global state. 

```text-plain
<script>
	import {writable} from 'svelte/store'
	const storedValue = writable({prop:'value'})
</script>

// the $ makes it subscribe to changes.
{$storedValue.prop}
```

OnMount
-------

kinda like the onStart of svelte components

```text-plain
<script>
	onMount(()=>{})
</script>
```

Slots
-----

Kind of like the children prop in react. you can 

In component you can defined where children will spawn

```text-plain
<div>
	<slot>{placeholder}</slot>
</div>
```

then you add children like you would

```text-plain
<component>
	{children}
</component>
```

Source:
-------

[https://www.youtube.com/watch?v=rv3Yq-B8qp4](https://www.youtube.com/watch?v=rv3Yq-B8qp4)