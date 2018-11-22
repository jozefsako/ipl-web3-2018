import React from "react";

import { Redirect } from 'react-router-dom';
import PaypalComponent from './paypal_component';
import "./paypal_style.scss";
import sendApiRequest from 'react/utils/api';

class PaypalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flex : false,
            url: "",
        };
        this.pay = this.pay.bind(this);
    }

    pay(amount) {
        console.log("1) pay() : montant --->  " + amount);
        const url = `/api/paypal/pay`;
        
        var json_amount = { "amount" : amount };
    
        sendApiRequest({
            url,
            method: "post",
            params : json_amount
        }).then((resp) => {

            this.setState({ url: resp.url });
            console.log("2) pay() : resp ---> " + resp.url);
            
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        console.log("3) pay() : url ----> " + this.state.url);
        if (this.state.url === ""){
        }else{
            window.location = this.state.url;
        }
        return (
            <React.Fragment>
                <PaypalComponent pay={this.pay} ></PaypalComponent>
            </React.Fragment>
        )
    }
}

export default PaypalContainer;
