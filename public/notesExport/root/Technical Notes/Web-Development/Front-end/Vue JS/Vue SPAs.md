# Vue SPAs
Project setup
-------------

[Just use vite](../Vite.md)

### Vue's entry point

The main js is the main entry point of the app, it renders the vue components into the root div

The Vue Component
-----------------

### Structure

```text-plain
<script setup lang="ts">
	defineProps<{ msg: string }>()
</script>

<template>
  	<h1>{{ msg }}</h1>
</template>

<style scoped>
	.read-the-docs {
  	color: #888;
	}
</style>
```

Like a vue widget there are essentially 3 parts, the script, template and style. divided by html like tags. it operates the same as the widget version

### Importing components

To import you have to import the component in the script tag then register it as a component. Then you can use the component in the html.

Importing the component

```text-plain
import {component} from './path/to/component.vue';

<script>
	export default {
  		components: {
    			ComponentA
  			}
	}
</script>
```

Then using it as an html tag

```text-plain
<template>
	<component/>
</template>
```