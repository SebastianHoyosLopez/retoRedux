import { auth, firebase, db } from "../firebase";

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
      return { ...initialData };
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

    console.log(res.user);

    const user = {
      uid: res.user.uid,
      email: res.user.email,
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    const userDB = await db.collection("user").doc(user.email).get();
    console.log(userDB);
    if (userDB.exists) {
      //cuando existe el usuario en firestore
      dispatch({
        type: USUARIO_EXITO,
        payload: userDB.data(),
      });
      localStorage.setItem("user", JSON.stringify(userDB.data()));
    } else {
      //no existe el usuario firestore
      await db.collection("user").doc(user.email).set(user);
      dispatch({
        type: USUARIO_EXITO,
        payload: user,
      });
      localStorage.setItem("user", JSON.stringify(user));
    }
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
  auth.signOut();
  localStorage.removeItem("user");
  dispatch({
    type: SIGN_OUT,
  });
};
