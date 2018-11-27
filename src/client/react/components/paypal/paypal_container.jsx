import React from "react";

import { Redirect } from 'react-router-dom';
import PaypalComponent from './paypal_component';
import "./paypal_style.scss";
import sendApiRequest from 'react/utils/api';

class PaypalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
        };
        this.pay = this.pay.bind(this);
    }

    pay(amount) {

        const url = `/api/paypal/pay`;
        var json_amount = { "amount": amount };

        sendApiRequest({
            url,
            method: "post",
            params: json_amount
        }).then((resp) => {
            this.setState({ url: resp.url });
        }).catch((err) => {
            console.log(err);
        })

    }

    render() {
        if (this.state.url === "") {

        } else {
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
