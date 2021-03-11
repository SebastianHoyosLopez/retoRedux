import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/UsuarioDucks";

import {withRouter} from 'react-router-dom'

const Login = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.usuario.loading)
  const activo = useSelector(store => store.usuario.activo)
  
  React.useEffect(() => {
    if(activo){
      props.history.push('/')
    }
  },[activo, props])

  return (
    <div className="mt-5 text-center">
      <h3>ingresar Con Google</h3>
      <hr />
      <button
        className="btn btn-dark"
        onClick={() => dispatch(loginUserAction() )}
        disabled={loading}
      >
        Acceder
      </button>
    </div>
  );
};

export default withRouter(Login);
