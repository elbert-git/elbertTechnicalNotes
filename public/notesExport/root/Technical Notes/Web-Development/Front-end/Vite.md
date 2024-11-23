# Vite
**What is this this?**![Home | Vite](Vite_logo.svg)
---------------------------------------------------

It's a new javascript bundler replacing web-pack

**What does this mean for you**
-------------------------------

Honestly you can treat it like the new \``npm init`\` or a new `create-react-app`

**Usage**
---------

```text-plain
npm init vite {app-name} 
```

 The above will start a new project boiler node project boiler plate. Then just pick what you project boiler-plate you wish to start with

You can also start the project in the folder you are in

```text-plain
npm init vite .
```

**Deploying Vite Apps**
-----------------------

> [https://towardsdev.com/deploying-react-application-to-github-pages-with-vite-2d3e32ae97e7](https://towardsdev.com/deploying-react-application-to-github-pages-with-vite-2d3e32ae97e7)

*   remove /dist from .gitignore
*   add sub url to vit.config.js. just your username.github.io

```text-plain
export default {
	base: "{https://{username}.github.io/{repoName}}",   // <- add this line(without final dash)
	//... rest of config
}
```

*   git add, commit and push everything
*   git push subtree into gh-pages branch

```text-plain
git subtree push --prefix dist origin gh-pages
```

**Importing assets into JSX**
-----------------------------

For importing images into react/vue applications

```text-plain
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
```

Running the test server 
------------------------

To run a local server, there is an npm script in the package.json already. just run it by:

```text-plain
npm run dev
```

if you want to expose the host for mobile development. just add another script in the package.json

```text-plain
"devHost": "vite --host",
```

then you can run `npm run devHost`

* * *

> Vite in 100 Seconds  - Fireship  
> https://www.youtube.com/watch?v=KCrXgy8qtjM