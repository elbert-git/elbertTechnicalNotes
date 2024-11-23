# Websockets
Websockets
----------

They are http connections that are constanty alive. allows constant two-way unpromtped messages and can store state. Great for real-time communication application like multiplayer games and chat apps.

Basic websockets
----------------

### Back-End

The backed is a websocket server. The code boils down to a bunch of callbacks on different events.

Just start a simple node project and  `npm install ws`

```text-plain
console.clear()

//import server
const WebSocket = require('ws');
//start server instance
const server = new WebSocket.Server({port:'8080'});

// socket.io is events based
///create on connection event callback
server.on('connection', (socket)=>{
    //on connect listen for a message and echo that back in a callback function
    console.log('a connection is established');
    socket.on('message', (message)=>{
        socket.send(`Roger that ${message}`);
    })
})
```

### Front-End

In the front end there is a built in class called websockets. to connect to websocket servers. Same principle as the back-end. A bunch of callbacks for event.s

```text-plain
<body>
   <h1>hello</h1> 
   <script>
       const socket = new WebSocket('ws://localhost:8080')
       socket.onopen = ()=>{
           socket.onmessage = ({data})=>{console.log(data)}
           socket.send("what up");
       }
   </script>
</body>
```

* * *

To see a much more scalable and robust implementation, use [socket.io](Websockets/Socket.io.md)