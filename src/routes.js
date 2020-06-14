import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Register from "./pages/Register";
import List from "./pages/List";
import EditVehicle from "./pages/EditVehicle";
import Navbar from "./components/Navbar";
import Drivers from "./pages/Drivers";
import DriverDetail from "./pages/DriverDetail";
import DriverDeatails from "./pages/DriverDetail";

const Routes = () => (
  <BrowserRouter>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={UsefullRoutes} />
      
    </Switch>
  </BrowserRouter>
);

const UsefullRoutes = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/vehicle/register" component={Register} />
      <Route exact path="/vehicles/list" component={List} />
      <Route exact path="/vehicle/edit"
          render={(props) => <EditVehicle {...props } />} 
      /> 
      <Route exact path="/drivers/list" component={Drivers} />
      <Route exact path="/driver/:driverId" component={DriverDeatails} />
    </>
  );
}

export default Routes;
