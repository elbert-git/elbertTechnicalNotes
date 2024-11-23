# FirestoreDB
**Firestore Database**
----------------------

\===================================================================

### **General intuition**

Firebase database implementation.

**Structure**

Firestore is a giant folder for storing jsons. It is structured with collections and documents. Think collections as folders and documents and files.

**Document ID**

every document has an id so that you can grab them

### Importing the module

import firestore and get firestore object

```text-plain
// import firestore
import {getFirestore} from 'firebase/firestore';

// get firestore object
const db = getFirestore();
```

### **Basic Usage (CRUD)**

*   import firestore and get firestore object

```text-plain
// import firestore
import {getFirestore} from 'firebase/firestore';

// get firestore object
const db = getFirestore();
```

*   reading documents from collection (files from folders)oc

```text-plain
// imports
import {getFirestore, collection, getDocs} from 'firebase/firestore';

// get collection reference
const collectionReference = collection(db, 'collectionName')

// get documents from collection
getDocs(collectionReference); //returns whole doc json

// better way of getting data
getDocs(collectionReference).then((snapshot) => {
  let finalArray = [];
  snapshot.docs.forEach((doc) => {
    finalArray.push({...doc.data(), id: doc.id});
  });
}).catch(err => {
  console.log(err);
});
```

*   reading a single document

```text-plain
// import 
import {getDoc} from 'firebase/firestore';

// get doc reference
cosnt docReference = doc(db, 'collectionName', {documentId});

// get doc
let data = getDoc(db, 'collectionName', {docId});
```

*   adding and deleting documents

```text-plain
// import 
import {addDoc} from 'firebase/firestore';

// use add Docs
addDoc(collectionReference, {dataJson});
```

*   delete documents

```text-plain
// import
import {docRef, deleteDoc} from 'firebase/firestore';

// get doc reference
cosnt docReference = doc(db, 'collectionName', {documentId});

// delete doc
deleteDoc(docRef); // keep in mind this is async. 
```

*   Updating documents

```text-plain
//import
import {updateDoc} from 'firebase/firestore';

// get doc reference
const docReference = doc(db, 'collectionName', {documentId});

// updateDoc
updateDoc(docRef, {keyToUpdate: newValue});
```

### **Real-time data listener**

```text-plain
// import onSnapshot
import {onSnapshot} from 'firebase/firestore';

//create event listener
onSnapshot(collectionReference).then((snapshot) => {
  let finalArray = [];
  snapshot.docs.forEach((doc) => {
    finalArray.push({...doc.data(), id: doc.id});
  });
}).catch(err => {
  console.log(err);
});
```

### **Querying data**

*   import query() and where()

```text-plain
//import query and where
import {query, where} from 'firebase/firestore';
```

*   querying

```text-plain
const queryData = query(collectionRef, where("key","comparator","value"));

const queryData = query(collectionRef, where("autho","==","C.S Lewis"));
```

*   Accessing data from query

```text-plain
getDocs(queryData).then((snapshot) => {
  let finalArray = [];
  snapshot.docs.forEach((doc) => {
    finalArray.push({...doc.data(), id: doc.id});
  });
}).catch(err => {
  console.log(err);
});
```

### **Sorting Data**

*   Creating an index

You need to create something called an index before you can sort stuff. For now just try the function once then It will give you a an error and a link to create an index automatically. Go to the link and create the index. Wait a few minutes then it should work once the index is enabled.

*   import orderBy

```text-plain
// import
import {orderBy} from 'firebase/firestore';
```

*   create a query

```text-plain
const queryData = query(collectionRef, where("key","comparator","value"));

const queryData = query(collectionRef, orderBy('key', 'desc/asc'));
```

*   read query data

```text-plain
getDocs(queryData).then((snapshot) => {
  let finalArray = [];
  snapshot.docs.forEach((doc) => {
    finalArray.push({...doc.data(), id: doc.id});
  });
}).catch(err => {
  console.log(err);
});
```

### **TimeStamps**

*   import server timestamp

```text-plain
import {serverTimestamp} from 'firebase/firestore';
```

*   use fucntion

```text-plain
let time = serverTimestamp();
```