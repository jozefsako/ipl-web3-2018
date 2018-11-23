var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');
var paypal = require('paypal-rest-sdk');

router.get('/accepted', function(req, res, next) {
    console.log(JSON.stringify(req.params));
    res.redirect(301, "http://localhost:3030/#/paypal");
})

router.get('/', function(req, res, next) {
    
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'AZpMi5kPlllIJ-2_ogyLVievxxgGXstAIRV492GdVVM07FtnqGsvs-glivhzkKvTyNefkQBodbzs6JOl',
        'client_secret': 'EH8YzcXy1tpUIv_v02-Se6anftTFU4_WdE6xJkUD9xRbUaeK_et0l1g0QCsAdnJN682M3WOZut7XXCr8'
          });
          
          console.log('-------------je rentre ici 2');
          
          var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3030/#/paypal/",
                "cancel_url": "http://localhost:3030/api/paypal/cancelled"
            },/*
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": req.params.name,
                        "sku": req.params.sku,
                        "price": req.params.price,
                        "currency": "EUR",
                        "quantity": req.params.quantity
                    }]
                },
                "amount": {
                    "currency": "EUR",
                    "total": req.params.amount
                },
                "description": req.params.description
            }]*/
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "req.params.name",
                        "sku": "req.params.sku",
                        "price": 1,
                        "currency": "EUR",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "EUR",
                    "total": 1
                },
                "description": "req.params.description"
            }]
        };
        
        

        var approvUrl;  //url sent by paypal to redirect the user to
        
        paypal.payment.create(create_payment_json, function (error, payment) {
          
            console.log('-------------je rentre ici 4');
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                //console.log(payment);
               approvUrl=(payment.links[1].href);
               
               var data='{"url" : "'+approvUrl+'"}';
               var myObj = JSON.parse(data);

              res.status(200).json(myObj);
               
            }
        })
        
        
});


router.get('/accepted', function(req, res, next) {
    console.log("ACCEPTED ----------",req.params);
});
  

module.exports = router;