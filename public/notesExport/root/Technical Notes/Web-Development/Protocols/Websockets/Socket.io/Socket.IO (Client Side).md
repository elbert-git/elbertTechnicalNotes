# Socket.IO (Client Side)
Creating a socket.io client
---------------------------

### Importing the npm module

```text-plain
npm install socket.io-client 
```

Then you can import it via

```text-plain
import { io } from "socket.io-client";
```

You can import via cdn link or bundle it. 

cdn link: `<script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script>`

The import will give you a global reference to the `io()` function used to connect to websocket servers

```text-plain
//connect to web socket server
const socket = io('{endpoint}');
        
//on message received
socket.on('message', (text)=>{
	console.log("test")
	const el = document.createElement('li');
	el.innerHTML = text;
	document.querySelector('ul').appendChild(el);
})

//emitting a message to socket server
socket.emit('message' ,"hello");
```

Pre-made events
---------------

*   `socket.on('connect')` will fire when you make a connection