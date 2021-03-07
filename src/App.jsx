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

const App = () => {
  const [firebaseUser, setFireBaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
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
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
};

export default App;
