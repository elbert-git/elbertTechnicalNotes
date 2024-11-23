# UnityEvents
Unity Events
------------

Unity's own pubsub mechanic

Creating an event
-----------------

First up is to import in the namespace

```text-plain
using UnityEngine.Events;
```

Simplest way is to create a public event. This way you can set it by the UI.

```text-plain
public UnityEvent eventName;
```

Invoking an event
-----------------

You can invoke an event by simply

```text-plain
eventName.invoke();
```