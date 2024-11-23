# Nodemon
Nodemon
-------

It's just an npm package that allows you to re-run a js file when you edit a file in you project. It's a developer UX thing. 

Installation and setup
----------------------

```text-plain
npm install nodemon -D
```

then set it up in `package.json` 

```text-plain
"dev": "nodemon server.js"
```

Everytime server.js is saved the server will restart.