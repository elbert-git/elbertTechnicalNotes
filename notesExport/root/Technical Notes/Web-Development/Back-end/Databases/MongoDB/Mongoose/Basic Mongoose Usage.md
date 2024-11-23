# Basic Mongoose Usage
Basic Mongoose Usage
--------------------

Mongoose get complicated. So here is the basic fucntions

Registering models and schemas
------------------------------

##### Creating a schema

Best to have one schema as one js file

```text-plain
const mongoose = ('mongoose');

const someSchema = mongoose.Schema({
	//propName: dataype
	name: Sting,
	age: Number
});
```

See the datatypes you can use [here](Schema%20%20and%20model%20Options.md)

##### Creating a model

A model is basically what the js interacts with

```text-plain
module.exports = mongoose.model('schemaName', someSchemaVar);
```

Remember to export the model. This is what you inherit in other files to interact with the documents

Creating document instances
---------------------------

Below will create a local doc instance not saved to the database

```text-plain
// import model class
const DocModel = require('./docModel');
...
// create doc
const doc = new DocModel({prop:value...});
```

Saving Documents
----------------

This will save the doc to the db

```text-plain
doc.save() // this is an async func
```

Creating documents
------------------

Just a shorter way of doing the above 2 headings with oneline

```text-plain
doc.create({propName:value...}) // async 
```

Editing document instances
--------------------------

just edit the doc like an object

```text-plain
doc.prop = value;
```

then call save(). This will update the db copy

```text-plain
doc.save() 
```

Querying data
-------------

### find()

use find(). [same selector syntax as mongoSH](../MongoSH/Selecting%20Data.md)

```text-plain
docModel.find({selector});
```

##### Selection dot functions

Lot's of people think the selector syntax is very confusing in mongoDB. So mongoose has as simpler syntax. Basically chaining fucntions that acts as filters

```text-plain
docModel.find({name: 'John'}).where("age").gt("12).where("name").equals("john");
```

List of dot methods:

*   `.where()`
    *   used in conjunction with: `.lt .gt .lte .gte .equals`
*   `.limit()`
    *   limits options
*   `.select()`
    *   only returns properties mentioned in arguments

###  findById()

```text-plain
docModel.findById('id');
```

### exists()

check if selection exists. returns bool

```text-plain
docModel.exists({selection});
```

Deleting data
-------------

```text-plain
docModel.deleteOne({selector}); // for first match
docModel.deleteMany({selector}); // for all matches
```

Advanced Usage
--------------

See here [more advanced usage](Advanced%20Mongoose%20Features.md)