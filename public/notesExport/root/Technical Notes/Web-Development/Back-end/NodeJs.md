# NodeJs
**Node JS**
-----------

A runtime development for javascript. Allows javascript to run on an OS like windows/linux/mac. Instead of just a browser. Allows server programs to be written in javascript

**Installation**
----------------

**Arch**

```text-plain
sudo pacman -S npm
```

**Ubuntu/Debian**

```text-plain
sudo apt-get install npm
```

**Node Version manager**
------------------------

Sometimes you just need a particular version of node

**Install nvm**

```text-plain
sudo apt-get install nvm
```

```text-plain
sudo pacman -S install nvm
```

##### Usage

*   To list down all available version

```text-plain
nvm ls-remote
```

*   to install one particular version

```text-plain
nvm install [version.number]
```

**Setting up a node project directory**
---------------------------------------

```text-plain
npm init -y
```

### When receiving an exisiting project

```text-plain
npm install
```

this will install the dependencies needed to run the project.

**Project Structure**
---------------------

### node\_modules

this is where all the node modules are stored for the project.

### package.json

this is the config file. you can put quick npm scripts here.

this also contains a roster of project and development dependencies.

**Node modules installation**
-----------------------------

\===================================================================

### Installing project dependencies

These are modules that are required for the project work on runtime. Like react, a-frame, threejs, vue, firebase

```text-plain
npm install {module name} --save //-s for short
```

### Installing development dependencies

These are modules that help develop or compile the project. not needed on the project's runtime. Like webpack, babel, polyfill

```text-plain
npm install {module name} --save-dev //-D for short 
```

**Custom Node modules**
-----------------------

### Traditional node modules

##### Exporting stuff in node.

```text-plain
modules.export = {objects you want to export}
```

##### Importing stuff in node

```text-plain
const varName = require('path/to/file'); 
```

### ES6 imports and exports

There is a new es6 way of importing stuff in node

##### Exporting stuff

```text-plain
export const someVar 
export default const defaultSomeVar // imported wihthout curly brackets
```

### Importing stuff

```text-plain
import {someVar} from '/path/to/file';
import defaultSomeVar from '/path/to/file';
```

**DotEnv**
----------

\===================================================================

reading secret varialbes that shouldnt be pushed to git

```text-plain
// read env
require('dotenv').config()
// get env variables
const token = process.env.TOKEN;
```

inside the .env

```text-plain
TOKEN="{secretToken}"
```