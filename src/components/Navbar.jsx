import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/UsuarioDucks";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const SignO = () => {
    dispatch(signOut());
    props.history.push("/login");
  };

  const activo = useSelector((store) => store.usuario.activo);
  const user = useSelector((store) => store.usuario.user);

  return (
    <div className="navbar navbar-dark bg-dark">
      {activo ? (
        <Link className="navbar-brand mx-4" to="/">
          {user.nombre}
        </Link>
      ) : (
        <Link className="navbar-brand mx-4" to="/">
          Redux Challenge
        </Link>
      )}
      {activo ? (
        <div className="d-flex">
          <NavLink className="btn btn-dark mr-2" to="/" exact>
            Inicio
          </NavLink>
          <button className="btn btn-dark mr-2" onClick={() => SignO()}>
            Salir
          </button>
        </div>
      ) : (
        <NavLink className="btn btn-dark mr-2" to="/login" exact>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default withRouter(Navbar);
