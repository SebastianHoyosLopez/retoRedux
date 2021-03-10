import { Products } from "../components/Products";
//const
const initialData = {
  loading: false,
  array: [],
  offset: 0
};
//type
const LOADING = "LOADING";
const ADD_TO_CART = "ADD_TO_CART";
const LOADING_ERROR = "LOADING_ERROR";

//reducer
export default function shoppingReducer(state = initialData, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ADD_TO_CART:
      return { ...state, loading: false, array: action.payload };
    case LOADING_ERROR:
      return { initialData };
    default:
      return { ...state };
  }
}

//action
export const addToCart = (products) => (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
 
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: {
          name: products.name,
          id: products.id,
          price: products.price,
          image: products.image,
        },
      },
    });
  } catch (error) {
    dispatch({
      type: LOADING_ERROR,
    });
  }
};
