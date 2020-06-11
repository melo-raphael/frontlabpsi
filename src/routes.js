import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import List from "./pages/List";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/list" component={List} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
