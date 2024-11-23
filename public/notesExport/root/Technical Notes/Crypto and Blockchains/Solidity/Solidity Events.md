# Solidity Events
**Events**
----------

A way to to set up a signal that other contracts, objects, fucntions etc. can subscribe to. But can also function like a console.log into the blockchain log

##### Creating an event

```text-plain
event EventName(dataType varName, datatype varname);
```

they look like structs. this is so that events can also carry data to further describe the event.

##### Emitting an event

```text-plain
emit eventName(argName, argName);
```

just call emit, then event name followed by the variables to make up that data.