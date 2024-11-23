# Mongoose
MongooseJS![](Mongoose_7552965.png)
-----------------------------------

A wrapper around mongoSH shell  to interact with database.

### Installation

```text-plain
npm i -D mongoose
```

### Main concepts

|     |     |
| --- | --- |
| Schemas | Data structure of a document. defines what property exists |
| models | A javascipt class that wraps around the schema. this is what javascript interacts with. |
| queries | querying documents from mongoose |

Connecting a mongoDB
--------------------

```text-plain
const mongoose = require('mongoose');
mongoose.connect(
	"url/to/db",
 	()=>{console.log('this runs if success)},
 	()=>{console.log('this runs if failure')}
);
```

Why Schemas and models
----------------------

Schemas are document structures. models extend the read and write capability with extra fucntions. like data validation and easier data reads. 

Basic use of mongoose
---------------------

Mongoose get's complicated but the complication just makes it more convenient. But you can use like a basic read and write. [See here for more](Mongoose/Basic%20Mongoose%20Usage.md) 

Advanced functions
------------------

Mongoose and create fucntions that extend the docSchema. Like data validation, methods and virtual virtrualware. [See here for more info](Mongoose/Advanced%20Mongoose%20Features.md)

Sources
-------

*   [mongoos crash course](#root/1iecD0eiIJE0/FIpWjsdCG9wE/RQ9S8AFyzgPI/bRLTcMHdC21M)