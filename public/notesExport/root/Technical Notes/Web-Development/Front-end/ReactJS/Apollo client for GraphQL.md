# Apollo client for GraphQL
Apollo client
-------------

In all honesty this is needlessly complicated. just use [fetch](../../Javascript/Javascript%20Fetch%20API.md). 

A react plugin for making graph ql queries. it's what all the tutorial uses and seems like the premiere tool for the usecase

Installation
------------

```text-plain
npm install @apollo/client graphql
```

Setup
-----

Imports

```text-plain
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'; //for error handling
```

then it's this boiler plate to create the client

```text-plain
//creating the link object
const errorLinkHandle = onError((graphqlErrors, networkErrors)=>{console.log(graphqlErroes, networkErroes)})
const link = from([
	errorLinkHandle,
	new httpLink({uri: {url}})
])

//creating the client class
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link
})
```

Creating the apollo provider. Just like react router. it should wrap all the components that need this graphql query

```text-plain
function App(){
	return (
		<ApolloProvider client={client}>
			{everything that needs the gql query}
		</ApolloClient>
	)
}
```

Querying 
---------

The first thing you need is the query object. here's how you create it

```text-plain
import {gql} from `@apollo/client';
const loadUserQuery = gql`
	query{
		users{
			name
			friends
		}
	}

` 
```

### The useQueryHook()

this is the main function you call to query

```text-plain
import {useQuery} from '@apolloClient/';

function someReactComponent(){
	//this will query, cache the data and provide some error handlig
	const {error, loading, data} = useQuery({gqlQuery})
	
	useEffect(()=>{//do something when data changes/loads}, [data])
	
	return <></>
}
```

Mutating Queries
----------------

Very similar to usual queries. you just have to create a query object firs

wooooow this is complicated. imma just use a simple fetch lmao 

```text-plain
import {gql} from `@apollo/client';
const mutatingQuery = gql`
	mutation {
		mutateFunction($fieldName1: {dataType}, $fieldName2:{dataType}){
			fieldName1,
			fieldName2
		}
	}
`
```

source
------

[https://www.youtube.com/watch?v=YyUWW04HwKY&t=270s](https://www.youtube.com/watch?v=YyUWW04HwKY&t=270s)