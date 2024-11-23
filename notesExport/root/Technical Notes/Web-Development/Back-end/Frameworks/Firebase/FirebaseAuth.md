# FirebaseAuth
**Firebase Authentication**
---------------------------

### **In general**

Firebase uses json tokens to verify if a user is logged in. If a valid json token is found in user localstorage, then the user is logged in. Generally firebase auth is just a collections of functions that you call.

### **Setup Auth Methods**

You need to go to the console to enable various authentication methods like via email/password or via google auth.

❗❗❗❗ keep in mind sign out and sign in fucntions are async functions ❗❗❗❗

### **Importing the module**

```text-plain
// import module
import {getAuth} from 'firebase/auth';

// get object
const auth = getAuth();
```

### **Usage**

Below will document the usage of using email and password. But will be teh same for all login methods. Just change the method names appropriately according to the docs. 🌐 [link to docs](https://firebase.google.com/docs/auth)

enabling the email/pass auth.

Go to firebase console and enable email/pass auth

registering

```text-plain
// import
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// register
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
```

*   signing in

```text-plain
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```

*   signing out

```text-plain
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
```

### Auth State Persistance

Set whether or not authentication tokens persist from session to session and how.

```text-plain
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .catch((error) => {
    // Handle Errors here.
  });
```

##### List of persistance

```text-plain
//will sign out when  closed tab
import {browserSessionPersistence } from 'fireabase/auth';

// inMemoryPersistence - will clear on page reload
import {inMemoryPersistence} from 'fireabase/auth';

// default is local - only a sign out will clear auth
// do nothing
```