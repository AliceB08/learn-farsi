import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Vocabulary, Home } from "./pages";
import { NavBar } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/vocabulary">
            <Vocabulary></Vocabulary>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
