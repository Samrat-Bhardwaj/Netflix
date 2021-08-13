import React from "react";
import Home from "./Components/pages/home";
import Signin from "./Components/pages/Signin";
import Signup from "./Components/pages/Signup";
import Browse from "./Components/pages/Browse";
// import * as ROUTES from './'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IsUserValid, ProtectedRoute } from "./helpers/routes";
import {useAuthListener} from "./customs/use-auth-listener"

function App() {
  const {user} = useAuthListener();
  return (
    <BrowserRouter>
    <Switch>
      <ProtectedRoute user={user} path={"/browse"}>
        <Browse />
      </ProtectedRoute>
      <IsUserValid user={user} loggedInPath={"/browse"} exact path={"/signin"}>
        <Signin />
      </IsUserValid>
      <IsUserValid user={user} loggedInPath={"/browse"} exact path={"/"}>
        <Home />
      </IsUserValid>
      <IsUserValid user={user} loggedInPath={"/browse"} path={"/signup"}>
        <Signup />
      </IsUserValid>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
