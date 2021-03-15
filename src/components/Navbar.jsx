import React from "react";
import "./style/Navbar.css";
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

  const count = useSelector((store) => store.cart.array.length);
  
  const activo = useSelector((store) => store.usuario.activo);
  const user = useSelector((store) => store.usuario.user);

  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
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
        <div>
          <NavLink to="/cartShopping">
            <p id="count" className="mt-3 text-danger">
              {count >= 1 ? count : null}
            </p>
            <img
              id="imgCart"
              src="https://imgur.com/w4yBTk5.jpg"
              style={{ height: "60px" }}
              alt="cart"
            />
          </NavLink>
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
