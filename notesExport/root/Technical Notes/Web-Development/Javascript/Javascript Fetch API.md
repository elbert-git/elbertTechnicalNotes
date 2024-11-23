# Javascript Fetch API
Javascript Fetch API
--------------------

This is how you make http requests in javascript

Basic usage
-----------

A good chunk of the time this is all that you need. It will return the content served by the server and nothing else. 

```text-plain
fetch({url})
```

Note that this is an asynchronous function. so it returns a promise. to really use this you can use this template

```text-plain
fetch({url})
.then((responseHeader)=>{console.log(responseHeader)})
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})
```

Advanced Fetches
----------------

For posting data and more nuanced fetch requests. simply supply the second argument with a object with all the options and details

```text-plain
fetch({url}, {
	method: 'POST',
	headers: {'content-type': 'application/json'},
	body: JSON.stringify({jsonData})
})
```