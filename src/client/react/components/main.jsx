import React from "react";
import { HashRouter } from "react-router-dom";

import { AuthenticationProvider } from "react/contexts/authentication";
import { ThemeProvider } from "react/contexts/theme";
import {Elements, StripeProvider} from 'react-stripe-elements';

import Layout from "./layout";

function Main() {
  return (
    <HashRouter>
      <AuthenticationProvider>
        <ThemeProvider>
        <StripeProvider apiKey="pk_test_YLLasAftx4BAOY6OIaMRHPtl">
          <div className="example">
            <Elements>
              <Layout />
            </Elements>
          </div>
        </StripeProvider>
        </ThemeProvider>
      </AuthenticationProvider>
    </HashRouter>
  );
}

export default Main;
