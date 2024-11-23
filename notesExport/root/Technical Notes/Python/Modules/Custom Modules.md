# Custom Modules
This is how you can separate and import you python files

Basic Imports
-------------

from a sibling file

```text-plain
from fileName import *
from fileName import {specificItem}
```

from folders or nested directories

```text-plain
from path.to.file import *
from path.to.file import {specific items}
```

Importing you own modules
-------------------------

You can create your own modules if you want to import a whole bunch of code and files at once. A module is a folder with an `__init__.py` file inside. When python imports a folder it will look for this file first. Then everything from the `__init.py` file will be imported. So import everything you into it

Inside the `__init__.py` file

```text-plain
# you can simply import every sibling file here 
__all__ = ["siblingFileName", "sibilingFileName2"]

# traditionally you will just import everything you need here
from path.to.file import *
from path.to.file import {specific items}
from fileName import *
from fileName import {specificItem}
```