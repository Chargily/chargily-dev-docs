# Integration via Javascript Library

> Below you can find detailed informations About Integration via NodeJS

# Requirements
1. NodeJS v14 or later
2. Get your API ```API KEY```/```SECRET KEY``` from [ePay by Chargily](https://epay.chargily.com.dz)

# Installation
* Via npm/yarn

You can install the package via NPM/Yarn. Run the following command:
```bash
npm i chargily-epay-gateway
# or 
yarn add chargily-epay-gateway
```
# Usage
1. create payment redirection page

The package needs to be configured with your account's secret key, which is available in the [ePay Dashboard](https://epay.chargily.com.dz). Require it with the key's value:
```js
const chargily = require('chargily-epay-gateway')
const dotenv = require('dotenv')
const {Invoice, Mode} = require("chargily-epay-gateway/lib/configuration");

dotenv.config()

const order = new Invoice()
order.appKey = process.env.CHARGILY_APP_KEY 
order.backUrl = "https://www.exemple.org/" // must be a valid and active URL
order.webhookUrl = "https://www.exemple.org/webhook-validator" // this URL where receive the response 
order.invoiceNumber = "100" // must be integer or string
order.client = "chawki mahdi" // client name
order.clientEmail = "client@example.com" // client email
order.amount = 5000 // must be integer , and more or equal 75
order.discount = 0 // by percentage between [0, 100]
order.mode = Mode.EDAHABIA // or Mode.CIB

// createPayment is promise function (async, await ), so you will need to use then to receive the checkoutURL

const checkoutUrl = chargily.createPayment(order).then( res => {
   return res.checkout_url // redirect to this url to proccess the checkout 
})

```
1. create payment processing page
   
Here you will recieve the payement informations

```js
const {DefaultSignatureValidator} = require("chargily-epay-gateway/lib/Webhook");
const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
app.post('/webhook', (req, res)=>{
  let signature = req.header('Signature')

   let rs = DefaultSignatureValidator.isValid(
            signature, 
            process.env.CHARGILY_APP_SECRET,
            req.body) // return boolean
   
   res.send(rs)
 })
```
# Configurations

- Available Configurations

| key                   |  description                                                                                          | redirect     |  webhook     |
|-----------------------|-------------------------------------------------------------------------------------------------------|--------------|--------------|
| CHARGILY_APP_KEY      | must be string given by organization                                                                  |   required   |   required   |
| CHARGILY_APP_SECRET   | must be string given by organization                                                                  |   required   |   required   |
| order.backUrl         | must be string and valid url                                                                          |   required   | not required |
| order.webhookUrl      | must be string and valid url                                                                          |   required   | not required |
| order.mode            | must be in **CIB**,**EDAHABIA**                                                                       |   required   | not required |
| order.invoiceNumber   | must be string or int                                                                                 |   required   | not required |
| order.client          | must be string                                                                                        |   required   | not required |
| order.clientEmail     | must be string and valid email This is where client receive payment receipt after confirmation        |   required   | not required |
| order.amount          | must be numeric and greather or equal than  75                                                        |   required   | not required |
| order.discount        | must be numeric and between 0 and 99  (discount in %)                                                 |   required   | not required |
| order.comment         | must be string                                                                                        |   required   | not required |

# Notice
- If you faced Issues [Click here to open one](https://github.com/Chargily/epay-gateway-nodejs/issues/new)
