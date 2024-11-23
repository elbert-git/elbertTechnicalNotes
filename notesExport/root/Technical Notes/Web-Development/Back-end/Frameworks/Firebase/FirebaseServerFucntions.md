# FirebaseServerFucntions
**Firebase Functions**
----------------------

\===================================================================

source: [https://firebase.google.com/docs/functions/local-emulator](https://firebase.google.com/docs/functions/local-emulator)

### What is this

Basically creating restAPI with firebase.

### Setup

install dependencies

```text-plain
npm install -g firebase-tools
```

using the firebase tools

login: `firebase login`

init functions: `firebase init functions`

the above will start a firebase fucntion boilerplate

Deploying functions: `firebase deploy --only functions`

### Boilerplate

```text-plain
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;

  res.json({result: `Message with ID: ${writeResult.id} added.`});
});
```

Handle url parameters with by appending `?=parameterName=value`

### Testing

Start a local firebase server emulator here

```text-plain
firebase emulators:start
```

It will provide you a link to test your url functions.

### Working with Express and CORS

```text-plain
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);
app.get('/hello', (req, res) => {
  // response code goes here.
  res.send(`Hello`);
});
```