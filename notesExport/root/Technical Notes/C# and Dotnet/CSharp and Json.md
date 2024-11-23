# CSharp and Json
Using simpleJSON
----------------

This is probably the best way I found to use unity and json

Installation
------------

Just download the repo zip from this [github repo](https://github.com/Bunny83/SimpleJSON) and import it into unity

Usage
-----

Use the namespaces

```text-plain
using SimpleJSON;
```

### Writing the json

creating the json

```text-plain
// initialise the object
JSONObject someJson = new JSONObject();
// add properties and values
someJson.Add("key", {value});
```

Adding arrays

```text-plain
// create array 
JSONArray someArray = new JSONArray();
// add stuff to array
someArray.Add({value});
// connect to main json
someJson.add("arrayKey", someArray);
```

to stringify

```text-plain
someJson.ToString();
```

### Reading the json

```text-plain
JSONObject someJson = (JSONObject)JSON.Parse({jsonString});
```