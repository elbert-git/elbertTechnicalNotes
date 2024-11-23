# Next JS SRR, ISR, CSR all the Rs
Server side by default
----------------------

By default your react components are server rendered. Basically change this unless you get an error

Incremental Server Rendering
----------------------------

When you want the site to kinda change at specificed interval. like if there is a new blog post. you can fetch the data to render with the this extra argument

```text-plain
{next: {revalidate:10}} // will update renders every 10 seconds 
```

You can also make it always update on load

```text-plain
{cache: 'no-store'}
```

Use client
----------

For more interactive stuff, like events and states, simply add this so it becomes a typical react comonent. Use this at the top

```text-plain
'use client';
```