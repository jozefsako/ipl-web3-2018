import React from "react";

import { Route } from "react-router-dom";

import HelloWorld from "./hello_world/hello_world";
import HelloFromParams from "./hello_world/hello_from_params";
import TodoAppContainer from "./todo_app/todo_app_container";
import MessagesContainer from "./messages/messages_container";
import MessageContainer from "./message/message_container";
import LoginContainer from "./login/login_container";
import StripeContainer from "./stripe/stripe_container";
import PaypalContainer from "./paypal/paypal_container";

function RouterOutlet() {
  return (
    <React.Fragment>
      <Route exact path="/" render={() => <HelloWorld name="bob" />} />
      <Route path="/hello/:name" component={HelloFromParams} />
      <Route path="/todo" component={TodoAppContainer} />
      <Route path="/messages" component={MessagesContainer} />
      <Route path="/message/:id" component={MessageContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/stripe" component={StripeContainer} />
      <Route path="/paypal/" component={PaypalContainer} />
    </React.Fragment>
  );
}

export default RouterOutlet;
