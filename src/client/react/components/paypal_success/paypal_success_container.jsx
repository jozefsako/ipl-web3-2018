import React from "react";

import { Redirect } from 'react-router-dom';
import PaypalSuccessComponent from './paypal_success_component';
import "./paypal_success_style.scss";
import sendApiRequest from 'react/utils/api';

class PaypalSuccessContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PaypalSuccessComponent></PaypalSuccessComponent>
            </React.Fragment>
        )
    }
}

export default PaypalSuccessContainer;
