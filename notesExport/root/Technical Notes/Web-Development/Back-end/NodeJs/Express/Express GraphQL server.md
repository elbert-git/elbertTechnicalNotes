# Express GraphQL server
Creating a graphQL server with express
--------------------------------------

Just like a restful api. you can create a graphQL server with express

installation and setup
----------------------

it's simply a matter of setting up the epxress server, creating the graphql schema, and running the graph ql extension for express

```text-plain
npm install graphql express-graphql
```

Setting up the GraphQL server
-----------------------------

```text-plain
console.clear();
//imports
const express = require('express');
const {graphqlHTTP, getGraphQLParams } = require('express-graphql'); // express graph ql plugin
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql') //grpah ql js program

// create server
const app = express()

//setup graphql express plugin
app.use('/graphql', graphqlHTTP({
    schema: schema, //set the schema here
    graphiql: true, // graphql ui 
}))

//run server
app.listen(5000, ()=>{console.log('server says hello m8')})
```

Note that the server requires a schema

Creating Schemas
----------------

You can create a schema by following this format

```text-plain
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: ()=>{return 'world';},
      },
    },
  }),
});
```

It really is just creating a new graph ql type. most js data types have a graph ql type to along with it. you jus create or nest the necessary fields

You can also create you own graphql types

```text-plain
import {GraphQLObjectType} from 'graphql'

const CustomType: new GraphQLObjectType({
	name: {name},
	description: {desc},
	fieds:{
		field1: {type: {graphQLType}},
		field2: {type: {graphQLType}},
		field3: {
			type: {graphQLType},
			resolve: ()=>{//function to resolve the data}
		},
	}
})
```

Mutating
--------

Similar to creating a query. you need to create a mutating query to process pushing data into the server

creating a mutating query

```text-plain
const RootMutationType = {
	name: 'Mutation',
	description: 'Root Mutation',
	fields: ()=>{
		addBook: {gqltype},
		description: 'add an entry of type above',
		args: {
			fieldName1 : {type},
			fieldName2 : {type},
			fieldName3 : GraphQLNonNull({type}) //for required fields
		},
		resolve: (parent, args)=>{
			// use the args to insert data into data base
			
			return {final instance from args} //just so that client hears okay from http
		}
	}
}
```

The visual schema inspector
---------------------------

When you setup the graph ql server you can set this attribute to true. to get a visual inspector

```text-plain
//setup graphql express plugin
app.use('/graphql', graphqlHTTP({
    schema: schema, 
    graphiql: true, // graphql ui 
}))
```

then just go to the served url in a browser. this is a great debugging tool

Deploying
---------

Please don't forget to set NODE\_ENV=production if you are running a production server. It will disable some checks that can be useful during development but will significantly improve performance.

source
------

[https://www.youtube.com/watch?v=ZQL7tL2S0oQ](https://www.youtube.com/watch?v=ZQL7tL2S0oQ)

[https://www.npmjs.com/package/graphql](https://www.npmjs.com/package/graphql)