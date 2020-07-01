import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import WelCome from "./welcome";

const Pages = (): JSX.Element => {

  return (
    <Router>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/" ><WelCome /></Route>
      </Switch>
    </Router>
  );
};

export default Pages;
