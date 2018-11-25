var express = require('express');
var router = express.Router();

/*const stripe = require('stripe')(sk_test_nmpN1YJZZG07AOib8pRAsS71);

routeur.post('/', (req, res) => {
    return stripe.charges
      .create({
        amount: req.body.amount, // Unit: cents
        currency: 'eur',
        source: req.body.tokenId,
        description: 'Test payment',
      })
      .then(result => res.status(200).json(result));
});*/   

router.post('/doPayment', (req, res) => {
  console.log(req.body);
});
module.exports = router;