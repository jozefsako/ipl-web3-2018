var express = require('express');
var router = express.Router();
var paypal = require('paypal-rest-sdk');

router.post('/pay', (req, res) => {

    console.log("---> 1) router paypal");

    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'AR04aVW-BvgAKmhpALlDlFwbloxnJh2KDww7fNsnK1aAh7mm65j-0_yF0N7a1nEsS7EUMBlrCBjjKpeh',
        'client_secret': 'ELQQyXa-Kg5AbIhq0QjjQgxXPcQv27SJlDvkjl9C7-B3eLfG31OT9ZfCs416-WJvZqQPgbdtkf3cjE_9'
    });

    console.log("-----> 2) router paypal");
    console.log(req.body);


    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3030/api/paypal/success",
            "cancel_url": "http://localhost:3030/api/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Donation for IPL",
                    "sku": "001",
                    "price": req.body.amount,
                    "currency": "EUR",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "EUR",
                "total": req.body.amount
            },
            "description": "Projet Web03 - paiement en ligne via Paypal !"
        }]
    };

    console.log("---> je suis la 3");
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === "approval_url") {
                    console.log("---> je suis la 4");
                    var json = '{"url":"' + payment.links[i].href + '"}';
                    console.log(json);
                    res.send(JSON.parse(json));
                }
            }
        }
    });
    console.log("---> je suis la 5");
});

router.get('/success', (req, res) => {

    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    var execute_payment_json = {
        "payer_id": payerId
    }

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.redirect(301, "http://localhost:3030/#/paypal/success");
        }
    })

});

router.get('/cancel', (req, res) => res.send(301, "http://localhost:3030/#/paypal/cancel"));

module.exports = router;
