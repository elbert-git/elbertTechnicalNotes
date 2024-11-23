# Javascript Events(only browser front-end)
General
-------

They are like signals to emit a function

Creating and emitting
---------------------

**Creating an event**

```text-plain
const myEvent = new Event("eventName", {options})
```

options is optional

**emitting an event** 

```text-plain
document.dispatchEvent('eventName);
```

**listening to an event**

```text-plain
document.addEventListener('eventName', ()=>{})
```

Options
-------

### isTrusted

checks if the event is emitted from a user input. (not from another javascript call)

### Bubbling 

allows your event to bubble through the dom. 

### Details

allows custom details for events

```text-plain
const myEvent = new Event("eventName", {detail: {objMappingOfDetails}})
```

Naming events
-------------

Name events like so to prevent event clashes in project and future javascript amendments

```text-plain
projectName:eventName
```