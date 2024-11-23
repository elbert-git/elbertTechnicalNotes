# Python OOP
Basics
------

### Creating a class

```text-plain
class MyClass:
	def __init__(self, args): # constructor
		self.prop = args
		self.otherProp = args
```

### Instantiating a class

```text-plain
instance = MyClass(args)
```

### Creating Methods and properties

works like what you expect

```text-plain
class MyClass:
	def __init__(self, args): # constructor
		self.prop = args <- this is a prop
		self.otherProp = args
		
	def someMethod(self, args):
		self.args = value
```

##### The `self`

This is pythons keyword to reference the instanc of the class. Similar to javascript's `this`

Class Level Props and Methods
-----------------------------

 these are kinda like the static stuff for python classes

### Class Properties

these behave like static props . you access them on the class level instead of instance

```text-plain
class Student:
	count = 0 # define them outside of constructor
	def __init__(self, args): # constructor
		self.id = count
		count += 1 # increment id
```

### Static Methods

Similar to above but you just make a method and add a decorator to it. By python philosophy these should just be utility function and have no access to class data. even though you totally can

```text-plain
class SomeClass:
	@staticmethod # you need to add this decorator
	def someMethod():
		pass
```

### Class Methods

These behave more like the static properties that you know. They have access to class data. 

```text-plain
class SomeClass:
	count = 0
	@classmethod
	def incrementCount(cls): # note that cls is not self
		cls.count = +1
```

Dunder methods
--------------

Dunder short for double underscore. These are special that modify how python operations can interact with the class

### str

This is the most common. This dictates the string representation of the class so that when you print an instance it's more practical to use

```text-plain
def __str__(self):
	return f"class is {self.prop}"
```

This runs when `str(class)` and more importantly when `print(class)`

### repr

This is kinda like str but more developer friendly. rarely used as of what i know but most importantly its used to duplicate the class

```text-plain
def __rep__(self):
	return f"Class("{arg}")"
```

### operations

There are dunder methods when you add, subtract, mul and divide as well

see full list here : [https://www.geeksforgeeks.org/dunder-magic-methods-python/](https://www.geeksforgeeks.org/dunder-magic-methods-python/)

“Private” properties
--------------------

lmao python doesnt seem to have a enforced private properties. so people just put a `_` in front of properties by convention to say “hey you shouldnt touch this”

Property decorators
-------------------

These are how you can create getters and setter methods in your class. They let you create pseudo properties so to speak. if you have full name which combines first name and last name. you wouldnt want to duplicate data. you can create function that combines them to get the full name. 

```text-plain
# gets a property from the class
@property
def age(self):
	return self.age

# This allows the property to be set
@age.setter
def age(self, age):
	# do some code
	self._age = age

# This allows the property to be deleted
# do some code
@age.deleter
def age(self):
	self._age = none
	
```