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
  }

  onFieldChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    })
  }

  donate(amount){
    
    const token =  this.props.stripe.createToken({name: "Name"});
    console.log(token);
    const url = `/api/stripe/doPayment/`;
    sendApiRequest({ url, method:"POST", params : token})
      .then((response) => {
        this.setState({
          
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          
        })
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
  