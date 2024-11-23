# Javascript Fundementals 
Logging
-------

```text-plain
console.log({thing that you want to log})
```

Comments
--------

```text-plain
// comments
```

Variables
---------

There are many ways to declare a variable. Some are with var but now we only use let or const. Never use var again. 

```text-plain
let someVar // usual variable and can be changed
const someConstatn // new variables that cannot be changed
```

Use `const` as much as you can

Data Types
----------

Here are the common basic data types

*   number (floats and ints)
*   string
*   Booleans
*   objects (like dictionaries and json but can hold methods)
*   functions (you can pass function as variables)
*   arrays (like python lists)

### More about objects

Objects let you hold a mapping of key value pairs.

```text-plain
let someObject = {
	property: value,
	otherProperty: value
}
```

They can also hold method

```text-plain
let someObject = {
	someMethod(){}
}
```

Functions
---------

Function behave like you think they would. heres how to create a basic one

```text-plain
function someFunc({arguments here}){
	// code here
}
```

### Arrow Functions

You can also create function like this

```text-plain
const someFunc = ({args here})=>{// code here}
```

Just a shorter way of declaring functions. Note how the above is actually a variable. 

Loops
-----

### For loop

```text-plain
for(let i = 0, i<array.length, i++){
	// code here
}
```

### forEach()

```text-plain
array.forEach((element, index)=>{// code here})
```

### While loop

```text-plain
while{boolean}{
	// code
}
```

If-Statements
-------------

```text-plain
if(boolean){
	// code
}else if(boolean){
	// code
}else{
	// code
}
```

### Ternary operator

A shorthand for quick and short if statements

```text-plain
someVar = {boolean} ? {if true value} : {if false value}
```

Switch statements
-----------------

```text-plain
switch ({valueToCheck}) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

camelCase conventions
---------------------

We name variables like this `someVarOrOtherProperty`. See how every word is capitalized except the first one. But classes and data types uppercases the first letter

```text-plain
let instanceOfSomeClass = new SomeClass();
```