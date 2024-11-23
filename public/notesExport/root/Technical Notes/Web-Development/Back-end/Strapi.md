# Strapi
Strapi
------

Strapi is a headless CMS. Kind of like wordpress but just the back-end. It provides you a database and an admin panel for you to easily manage content. 

Installation and setup
----------------------

```text-plain
npx create-strapi-app
```

Just use the quick setup option. no need to do anything manually. This should setup the dev server automatically. To start the dev server again

```text-plain
npm run develop
```

To start server for production

```text-plain
npm run start
```

Strapi content management
-------------------------

Content management in strapi is just basically building objects. You can define a set of parameters like a set of objects.  The process is pretty much creating a schema and the content are instances of that schema

### Types of content schemas

|     |     |
| --- | --- |
| Collection | this is a predefined schema of content. You can create multiple instances of this schema |
| Single | this is a unique content with a unique schema |
| component | this is a like a sub schema you can attach to a collection or single type |

### Schema Settings

Every time you create a schema setting, you can set stuff like

*   privacy: is it viewable by the API
*   min max values
*   etc

Strapi User Roles
-----------------

When you first create the project, the account first use is the super admin.  You can create other accounts with varying permissions of CRUD to the database. Permissions can be specific to content schema as well

Do note the public by default has no reading permissions for all content types by default. 

Strapi REST api
---------------

you can access the api by this url format.

for gettting all of one schema

```text-plain
{url}/api/{schemaName}
```

for getting a specific instance of one schema

```text-plain
{url}/api/{schemaName}/{id}
```

Setting up graph ql
-------------------

Just go to the market place and install the graph ql plugin

Source
------

[https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8\_8Oq6JerWqsKdAPxn](https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn)

pages to do 

*   Strapi Content Management
*   Strapi User Roles
*   Strapi RestfulAPI
*   Strapi

what is strapi

*   is a headless cms. like squarespace or wordpress without the front end. allows you to manipulate and manage content in a database and provides end points for your custom front end to read and display
*   you can read the strapi by a restful api or use graph ql

creating a project

*   creating a strapi backend
*   npx create-strapi-app
*   choose quickstart recommended settings

The admin ui

*   this is the cms. 
*   the code does nothing much for what you need
*   npm run develop to re-run the server

using the content type builder

*   you build the data for your blog here. 
*   there are 3 types of data
    *   collection types are defined json objects. you used this to create blog templates or any other predetermined data structure
    *   single types are unique object types. like a blogfeed featured feed
    *   components are small re-usable content like authors fields

setting roles

*   you can create accounts with different levels of access. 
*   you can also control what the public does. you can set it to read only. public has no access be default

Reading with restful api 

*   you can just use url/{content-typeName} to get all content types data
*   then you can use url/{content-typeName}/:id to get a specific content

using graphql

*   download and install the graph ql plugin in the admin ui
*   you can use url/graphql to help test the graph ql endpoint

the apollo client for graph ql

*   npm install
*   initiate the client and wrap the router

source: [https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8\_8Oq6JerWqsKdAPxn](https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn)