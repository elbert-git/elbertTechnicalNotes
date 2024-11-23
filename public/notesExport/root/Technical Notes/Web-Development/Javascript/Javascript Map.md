# Javascript Map
JS Maps
-------

So they are basically objects where you can have anything as the key

```text-plain
const map = new Map([{key}, {value}], [{key}, {value}])
```

the key can be an object, or array or anything. 

Crudding a Map
--------------

```text-plain
map.set({key}, {value}) // adding a key value pair
map.delete({key}) // deletes a key
map.has({key}) // checks for presence of a key
map.size // returns num of keys
```