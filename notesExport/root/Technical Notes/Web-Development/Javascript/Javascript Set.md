# Javascript Set
Set
---

It's basically an array but with only unique values. Very handy for sifting through an array to only get unique values. 

You shouldn't think of it like a data structure. More like an array utility companion

```text-plain
const set = new Set([1, 1, 2, 3, 3, 2]) // will return Set{1, 2, 3}
```

Crudding a set
--------------

```text-plain
set.add({value})
set.delete({value})
set.clear() // deletes all values
```

Checking values
---------------

```text-plain
set.has({value}) // will return boolean if it's there
```

Not just numbers
----------------

It's data type agnostic. so you can store numbers, strings and objects