---
title: Chargily ePay with JavaScript
sidebar_label: JavaScript
sidebar_position: 2
slug: /epay-js
---

# Requirements
1. Node 8, 10 or higher.
2. NPM

# Installation
1. Via npm (Recomended)
```bash
npm i chargily-epay-js
# or 
yarn add chargily-epay-js
```

# Quick start
Add `CHARGILY_APP_KEY` and `CHARGILY_APP_SECRET` in .env file with the secret key and app key from [ePay Dashboard][api-keys]

#Usage
The package needs to be configured with your account's secret key, which is
available in the [ePay Dashboard][api-keys]. Require it with the key's
value:

```js
const chargily = require('chargily-epay-js')
const dotenv = require('dotenv')
const {Invoice, Mode} = require("chargily-epay-js/lib/configuration");

dotenv.config()

const order = new Invoice()
order.invoiceNumber = "100" // must be integer or string
order.mode = Mode.EDAHABIA // or Mode.CIB
order.backUrl = "https://www.exemple.org/" // must be a valid and active URL
order.amount = 5000 // must be integer , and more or equal 75
order.webhookUrl = "https://www.exemple.org/webhook-validator" // this URL where receive the response 
order.client = "chawki mahdi" 
order.discount = 10 // by percentage between [0, 100]
order.clientEmail = "client@example.com" // email of customer where he will receive the Bill
order.appKey = process.env.CHARGILY_APP_KEY 

// createPayment is promise function (async, await ), so you will need to use then to receive the checkoutURL

const checkoutUrl = chargily.createPayment(order).then( res => {
   return res.checkout_url // redirect to this url to proccess the checkout 
})

```

# Configurations

- Available Configurations

| key                   |  description                                                                                          | redirect url |  process url |
|-----------------------|-------------------------------------------------------------------------------------------------------|--------------|--------------|
| CHARGILY_APP_KEY               | must be string given by organization                                                                  |   required   |   required   |
| CHARGILY_APP_SECRET            | must be string given by organization                                                                  |   required   |   required   |
| back_url        | must be string and valid url                                                                          |   required   | not required |
| webhook_url        | must be string and valid url                                                                          _|   required   | required |
| mode                  | must be in **CIB**,**EDAHABIA**                                                                       |   required   | not required |
| invoice_number       |  string or int                                                                                 |   required   | not required |
| client_name  | string                                                                                        |   required   | not required |
| clientEmail | must be valid email This is where client receive payment receipt after confirmation        |   required   | not required |
| amount      | must be numeric and greather or equal than  75                                                        |   required   | not required |
| discount    | must be numeric and between 0 and 99  (discount in %)                                     |   required   | not required |
| description  | must be string_                                                                                        |   required   | not required |

# Testing Webhook signing
You can use `DefaultSignatureValidator.isValid()` to validate incoming webhook.

```js

const {DefaultSignatureValidator} = require("chargily-epay-js/lib/Webhook");
const express = require('express');
const app = express()
const port = 3000
app.use(express.json());

app.post('/webhook-validator', (req, res)=>{
  let signature = req.header('Signature')

   let rs = DefaultSignatureValidator.isValid(
            signature, 
            process.env.CHARGILY_APP_SECRET,
            req.body) // return boolean
   
   res.send(rs)
 })
```