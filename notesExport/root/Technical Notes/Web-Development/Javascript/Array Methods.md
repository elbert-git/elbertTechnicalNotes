# Array Methods
Filter
------

Creates a new array filtered by a boolean statement.

```text-plain
const newArray = array.filter((val)=>{return val>0)})
```

Map
---

Returns a new array where each value from parent array is processed

```text-plain
const newArray = array.map((val)=>{return val+1})
```

Find
----

Similar to filter but only returns the first item it finds

```text-plain
const itemToFind = array.find((val)=>{return val===0)})
```

ForEach
-------

Loops over each item

```text-plain
array.forEach((val)=>{//do something})
```

Some
----

Returns a boolean. Loops over every value in the array if any of the loops returns true. it will return true

```text-plain
const isHaveZero = array.filter((val)=>{val===0})
```

Every
-----

Similar to some. Will return false if any of the loops return false.

```text-plain
const isNoHaveZero = array.every((val)=>{val===0}) 
```

Reduce
------

Oh this is complicated. The simplest use case is to sum a total of the value in an array

```text-plain
const total = array.reduce((currentTotal, item)=>{
	return currentTotal + item
}, 0)
```

For every loop,  it will take 2 arguments. The previous loop's returning value and the current looping value. Then you just iterate with those 2 values passed in. You also need to pass in the initial value of the returning value.   

Includes
--------

Similar to python's contain. return true if the the item is in array

```text-plain
array.includes(2)
```