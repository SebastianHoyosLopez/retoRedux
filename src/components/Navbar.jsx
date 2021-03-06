import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signOut } from "../redux/UsuarioDucks";
import {withRouter} from 'react-router-dom'

const Navbar = (props) => {
  const dispatch = useDispatch();

  const SignO = () => {
    dispatch(signOut());
    props.history.push('/login')
  };
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand mx-4" to="/">
        Redux Challenge
      </Link>
      <div className="d-flex">
        <NavLink className="btn btn-dark mr-2" to="/" exact>
          Inicio
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/login" exact>
          Login
        </NavLink>
        <button className="btn btn-dark mr-2" onClick={() => SignO()}>
          Salir
        </button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
