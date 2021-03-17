import React from "react";
import Products from "./components/Products.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./firebase.js";
import ShoppingCart from "./components/ShoppingCart.jsx";

const App = () => {
  const [firebaseUser, setFireBaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setFireBaseUser(user);
        } else {
          setFireBaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const ProtectedRoute = ({ component, path, ...rest }) => {
    if (localStorage.getItem("user")) {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      if (userStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to="/login" {...rest} />;
      }
    } else {
      return <Redirect to="/login" {...rest} />;
    }
  };

  return firebaseUser !== false ? (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <ProtectedRoute component={Products} path="/" exact />
          <ProtectedRoute component={ShoppingCart} path="/cartShopping" exact />
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </Router>
  ) : (
    <div className="text-center">
      <div className="spinner-border" style={{marginTop:"200px"}} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default App;
