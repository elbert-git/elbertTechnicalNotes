# MongoSH
MongoSH
-------

The shell to interact with mongoDB. use `mongosh` to call

Selecting a db
--------------

Listing databases

```text-plain
show dbs
```

choosing databases

```text-plain
use {dbs Name}
```

(Create) Appending data to the database
---------------------------------------

Mongo is pretty idiot proof here. if the data-path doesn't exists. it wills it to existence

##### insertOne()

so to create a `name:john` property in a document under the collection users under the database `someDB`

```text-plain
use dbs someDB
collectionName.collectionNameNested.insertOne({name:john})
```

It will jsut create all the field, collections and databases needed.

##### insertMany()

There is also insertMany(). It just takes an array of objects

```text-plain
insertOne([{obj},{obj}])
```

Reading Data
------------

It's just a matter of specifying what you are selecting then it will simply read

```text-plain
collection.find({selector})
```

Read how selection works [here](MongoSH/Selecting%20Data.md)

### Querying options

##### limit()

```text-plain
collection.find().limit({int})
```

just limits to showing the number you put

##### skip()

```text-plain
collection.find().limit({int})
```

skips over number of elements you put. like `limit(25)`. find elements after 25 indexes it returns

##### sort()

```text-plain
collection.find().limit(prop1:-1, prop2:1)
```

Sorts the data based on the property given in the argument

`-1` is for descending order and `1` is for ascending order

##### You can chain options

```text-plain
collection.find().limit(prop1:-1, prop2:1).skip(1).limit(2)
```

Updating Data
-------------

##### Replacing data

Below will edit the first 

```text-plain
updateOne({selector}, {prop:value})
```

usually the selector is `id:`

##### Iterating over numbers

You can also increment numbers by `{$inc: {age: 3}}`. This will increment the property by 3. Same for `$dec`.

##### Removing properties 

```text-plain
{$unset: {propName:""}}
```

Deleting properties

##### Renaming properties

```text-plain
{$rename: {oldName: “newName”}}
```

##### Handling arrays

You can push into and pull out elements from arrays as well

```text-plain
{$pull: {array:element}}
{$push: {array:element}}
```

### updatingMany()

This will select all that the selector selects

```text-plain
 updateMany({selector}, {prop:value});
```

### replaceOne()

This is a pretty nuclear option so use this with caution. It replaces the document wholesale.

```text-plain
 replaceOne({selector}, {new object});
```

Deleting data
-------------

```text-plain
deleteOne({selector});
deleteMany({selector});
```