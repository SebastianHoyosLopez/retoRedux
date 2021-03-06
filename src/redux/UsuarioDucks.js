import { auth, firebase } from "../firebase";

// constantes

const initialData = {
  loading: false,
  activo: false,
};

//type
const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";
const SIGN_OUT = "SIGNOUT";


// reducer
export default function usuarioReducer(state = initialData, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIO_ERROR:
      return { ...initialData };
    case USUARIO_EXITO:
      return { ...state, loading: false, activo: true, user: action.payload };
    case SIGN_OUT:
      return{...initialData}
    default:
      return { ...state };
  }
}

// action

export const loginUserAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    dispatch({
      type: USUARIO_EXITO,
      payload: {
        uid: res.user.uid,
        email: res.user.email,
        nombre: res.user.displayName,
      },
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        uid: res.user.uid,
        email: res.user.email,
        nombre: res.user.displayName,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const activeUserAction = () => (dispatch) => {
  if (localStorage.getItem("user")) {
    dispatch({
      type: USUARIO_EXITO,
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }
};

export const signOut = () => (dispatch) => {
  auth.signOut()
  localStorage.removeItem('user')
  dispatch({
    type: SIGN_OUT
  })
}
