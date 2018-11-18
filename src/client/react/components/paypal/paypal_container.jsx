import React from 'react';
import PaypalComponent from './paypal_component';
import sendApiRequest from "react/utils/api";

class PaypalContainer extends React.Component {
  constructor(props){
    super(props);

  this.state = {
    amount: "0",
    
};
  this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    })
}  
donate(amount){
  const url = "/api/paypal";
  console.log(amount);
  sendApiRequest({ url, method:'POST', params:{amout:amount, description:"Donation" }})
    .then((message) => {
    })
    .catch((error) => {
      console.error(error);
    })

  }
  render() {
    return <PaypalComponent donate={this.donate} amount={this.state.amount} onFieldChange={this.onFieldChange}></PaypalComponent>
  }
}
export default PaypalContainer;
