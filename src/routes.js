import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Register from "./pages/Register";
import List from "./pages/List";
import Drivers from "./pages/Drivers";
import EditVehicle from "./pages/EditVehicle";

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/vehicle/register" component={Register} />
      <Route exact path="/vehicle/list" component={List} />
      <Route exact path="/vehicle/edit" component={EditVehicle} />
      <Route exact path="/drivers" component={Drivers} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
