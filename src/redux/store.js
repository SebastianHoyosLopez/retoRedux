import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import shoppingReducer, { activeProduct } from "./ShoppingCartDucks";
import usuarioReducer, { activeUserAction } from "./UsuarioDucks";

const rootReducer = combineReducers({
  usuario: usuarioReducer,
  cart: shoppingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  activeUserAction()(store.dispatch);
  return store;
}
