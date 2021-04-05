import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { SignUpForm } from "./components/Signup";
import { PaymentForm } from "./components/Payment";

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUpForm />
        </Route>
        <Route exact path="/payment">
          <PaymentForm />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Routes;
