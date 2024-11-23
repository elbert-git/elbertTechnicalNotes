# GraphQL
Graph QL
--------

It's a protocol to communicate between apis. Like REST but a much cleaner workflow. 

GraphQL vs RESTful 
-------------------

The only downside to GraphQL is the upfront complexity in creating the server. It may not be worth it for small teams or relatively simple apis. You only see the benefits in complex, varied and interconnected datas. 

The intuition
-------------

The query results are determined by the structure of the query itself

For example if you have a query for a sandwich

```text-plain
sandwich{
	bread, 
	meat,
	sauce
}
```

You will get a json for

```text-plain
{
	bread: "italian",
	meat: "beef",
	sauce: "chilli",
}
```

Mutating queries
----------------

This the Post, Delete, and Update of Graphql. very similar syntax to the usual reading queries

```text-plain
Mutate{
	mutateFunction(fieldName1: "value", fieldName2:"value"){
		fieldName1,
		fieldName2
	}
}
```

The extra stuff nested is just returns the query of the data you just sent

Useful links
------------

*   [using graphql in react with apollo client](../Front-end/ReactJS/Apollo%20client%20for%20GraphQL.md)
*   [creating a graphql server](../Back-end/NodeJs/Express/Express%20GraphQL%20server.md)
*   [you can also also use fetch for graphql](../Javascript/Javascript%20Fetch%20API.md)

Source
------

[https://www.youtube.com/watch?v=ZQL7tL2S0oQ&t=664s](https://www.youtube.com/watch?v=ZQL7tL2S0oQ&t=664s)