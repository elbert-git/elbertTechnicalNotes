# Django Deployment
Just use hypercorn 

[https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/hypercorn/](https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/hypercorn/)

```text-plain
hypercorn --bind 0.0.0.0:{port} myproject.asgi:application 
```