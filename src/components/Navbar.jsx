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
          {user.name}
        </Link>
      ) : (
        <Link className="navbar-brand mx-4" to="/">
          Redux Challenge
        </Link>
      )}
      {activo ? (
        <div>
          <NavLink to="/cartShopping">
            <p id="count" className="mt-3">
              <strong>{count >= 1 ? count : null}</strong>
            </p>
            <img
              id="imgCart"
              src="https://imgbox.es/images/2021/03/16/carrito20dbc749abd24d18.th.png"
              style={{ height: "60px" }}
              alt="cart"
            />
          </NavLink>
          <NavLink className="btn btn-dark mr-2" to="/" exact>
            Inicio
          </NavLink>
          <NavLink className="btn btn-dark mr-2" to="/Profile" exact>
            Perfil
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
