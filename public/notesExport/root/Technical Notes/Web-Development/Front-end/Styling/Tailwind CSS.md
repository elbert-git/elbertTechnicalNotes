# Tailwind CSS
Tailwind CSS![File:Tailwind CSS logo.svg - Wikipedia](Tailwind CSS_2560px-Tailwind_C.jpg)
-----------------------------------------------------------------------------------------

Tailwind is a CSS utility framwork. Provides a large list of default classes for you to quickly style in your html file. Removing the need to contruct classes for every element. 

Installation and setup
----------------------

### Using the client

First install the package

```text-plain
npm install tailwindcss
```

create the boiler plate files

```text-plain
npx tailwindcss init
```

in the `tailwin.config.js`

```text-plain
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // <- add  this line
  theme: {
    extend: {},
  },
  plugins: [],
}
```

create the input css and fill it with this

```text-plain
@tailwind base;
@tailwind components;
@tailwind utilities;
```

run the process to produce the final css file

```text-plain
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

link the output css file in you html

```text-plain
  <link href="./output.css" rel="stylesheet">
```

### Integrating with vite

Install tailwind and dependencies

```text-plain
npm install -D tailwindcss postcss autoprefixer
```

create the required files

```text-plain
npx tailwindcss init -p
```

Configure what files to watch in the `tailwind.config.sj`. Note to add in all file types where you add css classes in. 

```text-plain
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- add framework file extenstions here
  ],
```

create `index.css` and fill it with the default 

```text-plain
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind shoudl run with dev now

```text-plain
npm run dev
```

General usage
-------------

It's just adding classes in line 

```text-plain
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"></div>
```

This kinda creates a quick styling without createing a whole sass workflow

### Using the Documentation

Quick way is to quickly go to the documentation and `ctrl-k` to search what you need

[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

### Using the cheatsheet

could be a faster way of searching what you need as well

[https://nerdcave.com/tailwind-cheat-sheet;](https://nerdcave.com/tailwind-cheat-sheet;)

Key extensions
--------------

Using the tailwind prettier extenstion to keep classes consistently in the editor:w