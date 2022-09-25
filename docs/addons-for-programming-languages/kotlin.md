---
title: Chargily ePay with Kotlin
sidebar_label: Kotlin
sidebar_position: 5
---

[Kotlin Library for Chargily ePay Gateway](https://github.com/Chargily/chargily-epay-kotlin "Kotlin Library for Chargily ePay Gateway")

FYI this module uses async await 


We will add this to MAVEN As soon as possible

        // creat a client Instance
        val chargiliClient : Chargily = Chargily("Put your API KEY HERE ")
        


      //creat a invoice model 
      
        val invoice :InnoviceModel = 
        InnoviceModel("mohameed" ,"mohamed.hacine00@gmail.com" , "3545644" , 009999.4 , 7.5 ,"https://www.yourwebsite.com",
            "https://www.yourwebsite.com/purshase" , PaymentMethode.EDAHABIA ,"Hola ")
            

      GlobalScope.launch {
                var response =  chargiliClient.creatPayment(invoice)
       
              var checkout =   response.body()?.checkout_url.toString())
              println(checkout)
             }