# Creating Express Routers
Express Routers
---------------

These are just way to split the routes into multiple files. You can create them like so

```text-plain
import { Express, Router } from "express";

export const router = Router()
 // create the router and export it

router.get('/', (req, res) => {
    res.send('server is up and running')
})
```

Then you can import them into the main server like so

```text-plain
app.use(router)
```

simple