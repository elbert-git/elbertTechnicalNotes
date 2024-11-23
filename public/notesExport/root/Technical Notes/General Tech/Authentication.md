# Authentication
In general
----------

This is all about making sure the user who they claim they are. 

Verifying users
---------------

Probably the main part of authentication. users attemp logins by giving credentials like a username and password. These credentials are verified on server side to prevent compromised clients from spooffing auth. 

### On register

When the server receives a registeration request it hashses the password (like with bcrypt) then saves the username/hashed password pair to the database

### On login attempt

On logins the server matches the user and passwords with the datatbase and compares the password with the hash. if match then  verification is successful.

On a successful authentication request the server then returns a acookie or jwt to the client to maintain the authenticaed status. (see below)

### On every authenticated requests

Every request that requires authentication will need to accomponied by the token/cookie to verify the user is authorized to make that request. 

Maintaining Authenticated sessions
----------------------------------

### Using Session cookies (unadvisable)

Traditionally this is how authentication is done. Once server has verfied the credentials it will respond with a session cookie which is like a temporary password to authenticate requests. 

This is simple but unadvisable today because of:

*   Scaling issues: Authentication load scales with every request
*   Vulnerabilities: This is vulnerable to snooping whether man in the middle or just checking the cookies

### Using JWTs

The current method is to use JWT, Json Web Tokens. Which in a nutshell is like an encrypted state.  JWTs are essentially encrypted JSONs. Usually recording the current user credentials. These solve the 2 downsides mentioned above because

*   auth is now decoupled from every request. You can verify once and be authenticated multiple times
*   The state is also encrypted meaning that if tokens are stolen the damage is still minimal
*   You can invalidate compromised tokens

To see more about using JWTs see here

##### Access and refresh tokens

When using jwt you will kinda generate 2 different tokens, access and refresh tokens. Access tokens give access and expire quickly. Refresh tokens are made to refresh the access tokens if they are expired. 

Using OAuth2
------------

You can also use third party auths like google, apple, etc. Offloading the auth to other auth providers. This is the google signin 

Sources
-------

[https://www.youtube.com/watch?v=UBUNrFtufWo](https://www.youtube.com/watch?v=UBUNrFtufWo)