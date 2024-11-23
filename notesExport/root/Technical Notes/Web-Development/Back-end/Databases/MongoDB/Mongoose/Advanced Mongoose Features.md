# Advanced Mongoose Features
Advanced Mongoose Features
--------------------------

This is basically going into more detail to more efficiently use monogoose.

Data validation
---------------

You can set data validation within the document class/model itself. [see here](Schema%20%20and%20model%20Options.md). 

Best practice to edit docs
--------------------------

```text-plain
let doc = docModel.findById('id');
// ... do edits
doc.save()
```

Validations only run on doc.create() and doc.save(). best limit your writing operations to these 2 functions

Populating object IDs
---------------------

Kinda like joins in other databases. But basically if you have an object id in a schema. you can set it to populate the objects when reading it

```text-plain
const doc = await docModel({'id'}).populate("propName");
```

Extending model methods
-----------------------

Creates extra helper methods to manage/read data. Do note that you can't use arrow functions here.

### Model Methods

This is the basic method that is operated on a document instance. Define this in the file that defines the schema

```text-plain
docSchema.methods.methodName = fucntion (){console.log({some tring with ${this.propertValue}})};
```

call it by

```text-plain
docInstance.methodName();
```

This one is arguably useless. dk how to apply this hahaha. But it's here

### Static model methods

like methods, but static methods works on the model

```text-plain
docSchema.statics.methodName = fucntion(){};
```

calll it by

```text-plain
userModel.methodName();
```

This is the most useful one I think. you can create custom searchers like .findByName(name).

### Adding a query method

this defines a dot function for querying. It's an extra custom smart filter.

```text-plain
docSchema.query.methodName = function(){};
```

call it by

```text-plain
docModel.find({selector}).methodName()
```

### Adding a virtual property

It's definining a new property derived from the property defined. Like getting bmi from weight and height in a schema.

```text-plain
docSchema.virtual('nameOfProperty').get(function(){
	return `${this.prop1} and ${this.prop2}`
});
```

then get it by

```text-plain
docInstance.nameOfProperty
```

*   what is this
*   defining a queyrmethod
*   why?

Middleware
----------

function attachments to pre and post operations. Like if you want to do something before saving/validating for example

The most important attachments are before `save` and `update`

```text-plain
// defining a pre valdationt
docSchema.pre('event', function(){});
// defining a post valdationt
docSchema.post('event', function(){});
```

Great for updating timestamps for like an ‘lastEditedAt’ propert y.