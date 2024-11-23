# Firebase
**\-|- Firebase**
-----------------

### In General

A simple catch-all back-end implementation

### Source

[NetNinja's firebase 9 tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb)

**Installation**
----------------

### Installing the cli

```text-plain
npm i firebase-cli
```

### Installing firebase

```text-plain
npm install firebase
```

**General Project setup**
-------------------------

**create project on firebase website**

Go to the firebase console website and create a new project

**get project credentials**

Go to the project settings and you will find the project credentials. you will need it to initialised the firebase client

**initialise firebase app from client**

Create firebase.js and put below inside.

```text-plain
import {initializeApp} from 'firebase/app';

const firebaseConfig = {// copy from firebase console website};

initializeApp(firebaseConfig)
```

**\[ \]  Firebase rules and security**
--------------------------------------

\===================================================================