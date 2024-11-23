# Stripe
Stripe
------

Stripe is a developer friendly platform to handle payments online. It works by creasting a payment intent json and sending it the stripe API to start a payment. Once payment is complete. Stripe will fire a webhook.

### ❗ Some caution ❗

Stripes uses the smallest denominato of currency. So $1 would be 100 cents. keep that in mind.

General Usage
-------------

You need to create  back-end server to help construct a payment intent. You can just do that by creating a simple express server

### Creating the back end 

```text-plain
// get env vars
require("dotenv").config()


// setup express
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5500",
  })
)


// set up stripe
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

// database to store items (in actual practice you will have a database to store product prices to IDs)
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
])



// express end point to create paymetn request
app.post("/create-checkout-session", async (req, res) => {
  try { // create payment intent
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    })
    res.json({ url: session.url })
  } catch (e) { 
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000)
```

### On the front end

Simple supply the data to the server via http request.

Important links
---------------

[https://stripe.com/docs](https://stripe.com/docs)

* * *

Source

[https://www.youtube.com/watch?v=1r-F3FIONl8&t=180s](https://www.youtube.com/watch?v=1r-F3FIONl8&t=180s)