import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Workouts from "./WOD/Workouts";
import PrTabs from "./PR/Pr.tabs";
import PrSolo from "./PR/Pr.delete.confirm";
import Test from "./Test";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import { withAuthenticationRequired } from "@auth0/auth0-react";

//ce component offert par Auth0 permet de rediriger vers Auth0 si on essaye d'aller sur les PR sans etre loggé 
const PrivatePrTabs = withAuthenticationRequired(PrTabs);

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route> 

          <Route path="/mouvementsTabs" exact>
            <PrivatePrTabs />
          </Route>

          <Route path="/workouts/:workoutDuration" exact>
            <Workouts />
          </Route>

          <Route path="/test" exact>
            <Test />
          </Route>
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
          
          <Route path="/mouvements/:id" component={PrSolo} />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
