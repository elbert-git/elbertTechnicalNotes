# Python Inheritance
Allows a class to inherit methods and properties from the parent. you can inherit multiple classes

```text-plain
class Animal():
	def __init__(self, name):
		self.name = name

class Mouse(Animal):
	def __init__(self, name): #overrrides the parent function
		super().__init__(name) # calls the parent function
```

### Super()

the super fucntion seen above just returns a refernce to the parent. 

Abstract classes
----------------

These are just special types of base classes that can only be inherited and not instantiated. It's a way to assert required properties and types. 

```text-plain
from abc import ABC, abstractmethod

class AbstractClass(ABC):
	@abstractmethod
	def method(self):
		pass

class MyClass(AbstractClass):
	def method(self): <- this method needs to exit
		#code 
```