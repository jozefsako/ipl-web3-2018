import React from "react";
import {CardElement, injectStripe} from 'react-stripe-elements';

const StripeComponent = ({
    donate,

}) => {
    const amount = 10;  //exemple 10euros
    return (
        
        <div>
            Stripe
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={()=>donate(amount)}>Send</button>
           </div>
      </div>


    )
}

export default StripeComponent;
