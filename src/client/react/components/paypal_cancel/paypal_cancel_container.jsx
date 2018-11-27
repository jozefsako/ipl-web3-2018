import React from "react";

import { Redirect } from 'react-router-dom';
import PaypalCancelComponent from './paypal_cancel_component';
import "./paypal_style.scss";

class PaypalCancelContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PaypalCancelComponent></PaypalCancelComponent>
            </React.Fragment>
        )
    }
}

export default PaypalCancelContainer;
