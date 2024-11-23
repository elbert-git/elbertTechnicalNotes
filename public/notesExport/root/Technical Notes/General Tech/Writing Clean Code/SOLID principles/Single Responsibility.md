# Single Responsibility
Single Responsibility
---------------------

Every class should only have on reason to be modified. This makes editing programs very targeted. Especially for large projects with many hands. 

Why?
----

Makes every file a granular feature. If there is a change or update to the whole program. Changes can be targeted cleanly. And git commit messages also become cleaner. 

In Practice
-----------

This does mean over splitting responsibilities that you intuitively would. Like you would have an itemclass. But you may split it into itemUpdater, itemPrinter, so on and so forth

Example
-------

This class only has to change if the data model has to change. Imho if the class can be explained in one sentence that's good enough

```text-plain
Class Student(){
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}
```