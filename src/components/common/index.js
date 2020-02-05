import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Login/container";
import TaskPage from "../pages/Task/container";
import Header from "../ui/Header/container";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={TaskPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
