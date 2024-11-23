# Selecting Data
Basics
------

### By specific parameter

```text-plain
{name: "john", age: 23}
```

This will return documents based on exact matches.. Above will look for john age 23.

Query operators
---------------

for more richer and complex selection

| operator | explanation | example |
| --- | --- | --- |
| $eq/$neq | for equal or not equal to | collection.find({age:$eq:20}) |
| $lt/$gt/$lte/$gte | for greater/lesser/equal to | collection.find({age:$gte:20}) |
| $or | for either or | collection.find({ age: $or:\[20,21\] }) |
| $not | for returning everything but that | collection.find({age:$not:20}) |
| $exists | select check if field exists | collection.find({age: {$exists: fales}}) |
| $in/$nin | select if data is in/not in | collection.find({age: {$in:\[20\]}}) |
| $expr | for complicated selections with dependent conditions | collection.find($expr:{$gt:\[$valueOne, $valueTwo\]}) |