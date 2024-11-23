# Authentication in node
Authenication in node
---------------------

This is a guide to implement authentication in node with bcrypt and jwts and expresss

Registering a user
------------------

### Hash the password bcrypt

```text-plain
const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(password, salt)
```

Then save the username and hashpassword pair on the database

Logging a user in
-----------------

### Use Bcrypt to verify passwords

```text-plain
await bcrypt.compare(password, hashedPassword)
```

This will return a boolean whetherthe authentication is succesful or not

Managing authenticated state and access 
----------------------------------------

### Generating a JWTs

on succesful login you need to response to the client 2 different tokens. The access and refersh tokens

```text-plain
const accessToken = jwt.sign({userCredentialObject}, jwtSecretToken, {expiresIn: {duration}}) // duration typically "10m"
const refreshTOken = jwt.sign({userCredentialObject}, jwtSecretToken) //should not expire if you wish
```

return these 2 tokens to the client to help authenticate future requests

*   Note to save refresh tokens on server as well to check if they are active

##### Generating jwt secret tokens

just need to run this once and you can run it in console

```text-plain
require('crypto').randomBytes(64).toString('hex')
```

### Authenticating requests

Create a middleware for express

```text-plain
async function authenicateUsers(req, res, next){
	// usually access tokens are given in headers like
	// authorization: "Bearer {token}"
	const token = req.headers['authorization'].split(" ")[1]
	
	// verify
	jwt.verify(token, jwtSecret, (err, data)=>{
		// if error return forbidden response
		const decrypted = data
		// assume successful append data to parameters
		req.decryptedData = decryped
		next() // proceed to process endpoint
	})
}

// in the server
expressApp.post('/restrictedEndpoint', authenticateUser, (req, res)=>{
	const authData = req.decryptedData
	// proceed as usual
})
```

### Refreshing tokens

```text-plain
// check if refresh token is active
// if okay then generate a new access token and respond back to user
```

Logging a user out
------------------

```text-plain
//just delete the refresh token on the server or mark the token is invalidated
// this willmake the authentiations fail and require a new login
```

Best practices
--------------

This method works pretty well as it guarentees there should only be one refresh token. It's all about a balance of convenience and security for the user. There is no best answer. 

see below on how tokens are used differently in the industry

[https://www.youtube.com/watch?v=LowJMwa7LCU](https://www.youtube.com/watch?v=LowJMwa7LCU)