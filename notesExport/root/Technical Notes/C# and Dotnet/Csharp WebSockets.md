# Csharp WebSockets
 Install the package
--------------------

via nuget install \`WebSocketSharp-netstandard\`

Usage
-----

Use the namespace first

```text-plain
using WebSocketSharp;
```

Then you can jsut create the websocket and start lisetning

```text-plain
ws = new WebSocket({url})
ws.Connect();
ws.OnMessage += (sender, e)=>{
    DataReceived = e.Data;
}
```

To send messages you can 

```text-plain
ws.Send({message:string})
```