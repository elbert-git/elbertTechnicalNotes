# Open/Closed 
Open/Closed
-----------

Short for open for extension and closed for modification. Extending a class functionality should be done without modifying the code. 

Why?
----

You shouldnt need to touch old stable code if you dont need to introduce new bugs

In practice 
------------

This just means thinking forward, what would be the possible extensions or changes to this class and making sure there's room to extend it

Example
-------

```text-plain
class Shape{
	constructor(length, height){
		this.length = length;
		this.height = height;
	}
	
	calculateArea(){
		return this.length * 
	}
}
```