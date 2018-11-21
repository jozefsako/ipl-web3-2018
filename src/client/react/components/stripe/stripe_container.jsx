import React from "react";
import StripeComponent from "stripe_component";

class StripeContainer extends React.Component {
  state = {};
  
  render() {
    return (
      <StripeComponent 
        stripe={}
      />
    );
  }
  
}

export default StripeContainer;
