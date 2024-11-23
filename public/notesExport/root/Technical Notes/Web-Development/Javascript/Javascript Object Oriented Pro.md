# Javascript Object Oriented Programming
Object oriented programming
---------------------------

Dividing the program into different sub-programs that can be connected together. This is mostly done by creating  whole lot of classes

Creating Classes
----------------

Creating a class

```text-plain
class SomeClass(){
	constructor(argument){
		this.property = argument;
		this.otherPropert = someOtherValue;
	}
	someMethod(){
		// code
	}
}
```

instantiating a class

```text-plain
const instance = new SomeClass(argument);
```

### The constructor

This is the initial start() of the class and where you declare the internal functions you declare the them with 

```text-plain
this.propertyName = value
```

Inheritance
-----------

You can inherit from classes to derive it's properties and methods

```text-plain
class ChildClass Extends ParentClass{
	constructor(args){
		super(args)
	}
}
```

The `super` function calls the parent constructor

\`This\`
--------

`this`  is how you refer to the classes variables and properties

```text-plain
this.classMethod();
```

### Binding this

Note that sometimes the way methods/properties are called the `this` will be confused. To bind `this` into something specific use the bind method

```text-plain
someMethod.bind({classInstance/object})
```

The bind method will replace all mentions of this with the specific value you give it. It basically close the function and replaces all mentions of `this`

Private and Static
------------------

### Private

You can make an internal property of value not available to outside of the class

```text-plain
class SomeClass(){
	constructor(argument){
		#this.property = argument;
		#this.otherPropert = someOtherValue;
	}
	#someMethod(){
		// code
	}
}
```

Just preface the class properties and values with `#`

### Static

Statics are properties and methods that belong to the class type and not an instance. They enable you call methods/properties of a whole class rather than an individual instance. like `Math.Pi`. Note how you don't need to creat a math instance to call it

```text-plain
class SomeClass(){
	static someStaticProperty = null;
	constructor(argument){
		this.property = argument;
		this.otherPropert = someOtherValue;
	}
	someMethod(){
		// code
	}
	static someStaticMethod(){// code}
}
```

###### Singletons

Singletons are classes that only allow one instance allowing you to refer to only one specific instance

```text-plain
class SomeClass(){
	static instance = null;
	constructor(argument){
		if(instance){return instance}
		instance = this;
	}
}
```