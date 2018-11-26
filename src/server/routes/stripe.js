var express = require('express');
var router = express.Router();


const stripe = require("stripe")("sk_test_nmpN1YJZZG07AOib8pRAsS71");

router.post('/', function(req, res, next) {
  
  console.log("=============> BACKEND recoit amount et token =============> ", req.body.tokenID, req.body.amount);
  
    return stripe.charges
      .create({
        amount: req.body.amount, // Unit: cents
        currency: 'eur',
        source: req.body.tokenID,
        description: 'Test payment',
      })
      .then(result => res.status(200).json(result))
      .catch((err)=>{
        console.log("error dans le stripe.js ", err);
      })
});

module.exports = router;