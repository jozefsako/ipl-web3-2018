import React from 'react';
import PaypalComponent from './paypal_component';
import sendApiRequest from "react/utils/api";

class PaypalContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    amount: "0",
    url:"",
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
  const url = "/api/paypal";
  
  sendApiRequest({ url, method:'GET'})
  .then((response) => {
    console.log(response.url);
    this.setState({
      url: response.url,
    })
  })
    .catch((error) => {
      console.error(error);
    })
    //console.log(this.state.url);
    //window.location = this.state.url;  
  }
  componentDidMount(props){
    console.log(this.props);
  }
  render() {
    if(this.state.url===""){
    }
      else{
        window.location = this.state.url;  
      }
    return <PaypalComponent donate={this.donate} url={this.state.url} amount={this.state.amount} onFieldChange={this.onFieldChange}></PaypalComponent>
  }
}
export default PaypalContainer;
