---
title: Chargily ePay with Python
sidebar_label: Python
sidebar_position: 3
---


## Instalation
This is `sync` version using `requests` library 
```
pip install chargily-epay-python
```


### chargily-epay-async
This is `async` version using `aiohttp` library
```
pip install chargily-epay-Async
```

## Quickstart 
Simple example
```py
from chargily_lib.constant import EDAHABIA
from chargily_lib.invoice import Invoice
from chargily_lib.utils import extract_redirect_url
from chargily_lib.sync_lib.webhook import make_payment

API_KEY = "YOUR-API-KEY"

invoice = Invoice()
invoice.client = "Tarek berkane"
invoice.client_email = 'example@gmail.com'
invoice.invoice_number = '1'
invoice.mode = EDAHABIA
invoice.amount = 10000 
invoice.discount = 0
invoice.comment = 'my first invoice payment.'
invoice.back_url = 'https://example.com/'
invoice.webhook_url = 'https://example.com/'


response = make_payment(invoice, API_KEY)

if response.status_code == 201:
    print(extract_redirect_url(response.content))
```