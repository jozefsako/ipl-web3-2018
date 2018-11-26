import React from "react";
import StripeComponent from './stripe_component';
import sendApiRequest from "react/utils/api";
import {CardElement, injectStripe} from 'react-stripe-elements';

class StripeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: "11",
      cardNumber:"",
      ccv:"",
      expiration:""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.donate = this.donate.bind(this);
    this.sendToken2BackEnd = this.sendToken2BackEnd.bind(this);
  }

  onFieldChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    })
  }

  donate(amount){
    

    this.props.stripe.createToken({name: "Name"})
    .then((result) => {
      
      if(result.token){
        //token successfully created
        //console.log(result.token.id);
        this.sendToken2BackEnd(result.token.id, this.state.amount);
      }
      else{
        //token not created
      }
    });
    
  }
    sendToken2BackEnd(stripetok, amount){
      var  obj = {
        "tokenID" : stripetok, 
          "amount" : amount
      }
      
      const url = `/api/stripe/`;
    sendApiRequest({ url, method:"POST", params:obj})
      .then((response) => {
       
      })
      .catch((error) => {
        console.error(error);
        
      })
    }
    
  
  render() {
    return(
      <StripeComponent
        donate = {this.donate}
      />
      
    )}
  
}
  export default injectStripe(StripeContainer);
  