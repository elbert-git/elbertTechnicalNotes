# Socket.io
Socket.io
---------

A more robust and scalable library for websockets. 

Creating a socket-io server
---------------------------

```text-plain
import express from 'express'
import * as socketio from 'socket.io'
import http from 'http'


// create http server
const server = http.createServer() // you can put an express app as an arg here too if you want all in one port


// create socket server
const io = new socketio.Server(server, {
    cors: {
        origin: "*" // allow all headers
    }
})


// on connection event
io.on('connection', (socket) => {
    console.log('a socket has connected')


	// use the on('eventName') syntaxt to handle diffenet events
    socket.on('join', (incomingPayload, callback) => {
		// handle your data    
    	const data = incomingPayload
    
	// error handling

        if (error) return callback(error)
    })

	

	// on disconnect
    socket.on('disconnect', () => {
        console.log('socket has disconnected')
    })
})


server.listen(PORT, () => { console.log('server started') })
```

### To use sockets and express

```text-plain
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// handle express stuff

// Handle socket connections
io.on('connection', (socket) => {})

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

Socket Events
-------------

Socket.io are events based and you emit and listen to any event that you want by simply

```text-plain
socket.emit('eventName', dataPayload)
```

Then to listen on any client/server. Just simply

```text-plain
socket.on('eventName', (dataPayload)=>{// code here})
```

### Pre-made events

There are some pre-made events like

*   connection: when a connection is made
*   disconnect: when socket disconnects

Broadcast and Emit
------------------

`socket.emit()` will send a message to everyone. including the emitting client/server. To send it to just everyone else. use `socket.broadcast()` instead.

Rooms
-----

Rooms are a colllection of users. Users can belong to multiple rooms and rooms can have multiple users. this is how you send to specific users or group or users

```text-plain
// emitting a message to specific room
socket.to('roomName').emit('message', dataPayload)
// to send to multiple rooms just chain them
socket.to('room1').to('room2').emit('message', message)
```

### Default rooms

By default sockets have their own Ids as rooms

```text-plain
socket.id // this is the default room
```

you can emit to that room. This effectively is a DM

### Joining and Leaving rooms

```text-plain
socket.join('roomName')
socket.leave('roomName')
```

### Checking Who's in a room

```text-plain
io.sockets.clients.('roomName')
```

### Checking what room a socket is in

```text-plain
socket.rooms
```

Callbacks
---------

These are functions that are called when the socket server has completed the request. These fulfill functions of like read receipts and act as when “onSocketMessageReceived” on the client server. or letting the client know a result on the server.

From the client

```text-plain
const callback = (result)=>{console.log(result)}
socket.emit('message', message, callback)
```

On  the server

```text-plain
socket.on('message', (message, callback)=>{
	try{
		// this calls the function in the client passing the arguments
		callback('message received properly'); 
	}catch(e)=>{
		// this calls the function in the client passing the arguments
		callback('error with message') 
	}
})
```

Admin UI
--------

There is handy tool for seeing the status of sockets

Install the package

```text-plain
npm install @socket.io/admin-ui
```

import the package

```text-plain
import {instrument} from '@socket.io/admin-ui'
```

connect to the auth

```text-plain
instrument(io, {auth:false}) // without auth
```

Then on the browser just go to [https://admin.socket.io](https://admin.socket.io)  and you can just connect

*   remember to add the url to the cors

Then you can just add the server url and login. From here you can see all kinds of data about the current sockets like:

*   current connections
*   how many rooms
*   what rooms they are in

Namespaces
----------

This is like sub io servers for you to have separate sections of the socket server. It's basically like another websocket server just without creating another one on a whole nother port.

Creating a namespace

```text-plain
const newIO = io.of('/path')
// on connection event
newIo.on('connection', (socket) => {
    console.log('a socket has connected')
	// use the on('eventName') syntaxt to handle diffenet events
    socket.on('join', (incomingPayload, callback) => {
		// handle your data    
    	const data = incomingPayload
	// error handling
        if (error) return callback(error)
    })
	// on disconnect
    socket.on('disconnect', () => {
        console.log('socket has disconnected')
    })
})
```

You can also use middleware here. Especially for auth

```text-plain
newIO.use((socket, next)=>{})
```