import React from "react";
import Products from "./components/Products.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Products} path="/" exact  />
          <Route component={Login} path="/login" exact  />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
