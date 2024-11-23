# Django Web server
Creating end-points
-------------------

It's pretty simple just add it to the `urls.py` and passing an endpoint and functions

```text-plain
urlpatterns = [
    path('path/', {function}),
]
```

##### The function

You just have to create a function that takes in a request object and returning an http response object

```text-plain
from django.shortcuts import HttpResponse

def func(req):
	return HttpResponse({data})
```

### Endpoints from sub apps

In the main app's `urls.py`, you just need to `include` it

```text-plain
from django.urls import path, include

urlpatterns = [
	...
    path('path', include("{subAppName}.urls")),
]
```