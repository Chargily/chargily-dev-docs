---
title: Chargily ePay with Java
sidebar_label: Java
sidebar_position: 4
slug: /epay-java
---

<img src="https://raw.githubusercontent.com/rainxh11/chargily-epay-java/master/assets/chargily_java.svg" heigh="300"/>


# Instaltation:
[![](https://jitpack.io/v/chargily/chargily-epay-java.svg)](https://jitpack.io/#chargily/chargily-epay-java)
To install add Jitpack Repository & chargily package dependency to `build.gradle` gradle build file:
```groovy
repositories {
    maven { url 'https://jitpack.io' }
}
dependencies {
    implementation 'com.github.chargily:chargily-epay-java:1.1'
}
```

# Example Usage

## Sync
```java
import chargily.epay.java.*;

class ChargilyApp {
    public static void main() {
        ChargilyClient client = new ChargilyClient("[API_KEY]");
        Invoice invoice = new Invoice(
                "Chakhoum Ahmed",
                "rainxh11@gmail.com",
                5.0,
                "https://backend.com/webhook_endpoint",
                "https://frontend.com",
                PaymentMethod.EDAHABIA,
                "5001",
                10000.0);
        try {
            ChargilyResponse response = client.submitInvoice(invoice);
            if (response.isSuccess()) {
                response.getStatusCode();
                response.getCheckoutUrl();
            } else {
                response.getStatusCode();
                response.getErrorBody();
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
```

## Async
```java
import chargily.epay.java.*;

class ChargilyApp {
    public static void main() {

        ChargilyClient client = new ChargilyClient("[API_KEY]");
        Invoice invoice = new Invoice(
                "Chakhoum Ahmed",
                "rainxh11@gmail.com",
                5.0,
                "https://backend.com/webhook_endpoint",
                "https://frontend.com",
                PaymentMethod.EDAHABIA,
                "5001",
                10000.0);

        ChargilyCallback<ChargilyResponse> responseCallback = new ChargilyCallback<>() {

            @Override
            public void onResponse(@Nonnull Call<ChargilyResponse> call, ChargilyResponse response) {
                // do something on response
                if (response.isSuccess()) {
                    response.getStatusCode();
                    response.getCheckoutUrl();
                } else {
                    response.getStatusCode();
                    response.getErrorBody();
                }
            }

            @Override
            public void onFailure(@Nonnull Call<ChargilyResponse> call, @Nonnull Throwable t) {
                // do something on failure
            }
        };

        client.submitInvoiceAsync(invoice, responseCallback);
    }
}
```