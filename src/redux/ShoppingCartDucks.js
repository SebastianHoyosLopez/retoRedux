//const
const initialData = {
  loading_Product: false,
  activoProduct: false,
  array: [],
  offset: 0,
};
//type
const LOADING_PRODUCT = "LOADING_PRODUCT";
const ADD_TO_CART = "ADD_TO_CART";
const LOADING_ERROR = "LOADING_ERROR";

//reducer
export default function shoppingReducer(state = initialData, action) {
  switch (action.type) {
    case LOADING_PRODUCT:
      return Object.assign({}, state, { loading_Product: true });
    case ADD_TO_CART:
      return Object.assign({}, state, {
        activoProduct: true,
        loading_Product: false,
        array: [...state.array, action.payload],
      });
    case LOADING_ERROR:
      return { initialData };
    default:
      return { ...state };
  }
}

//action

export const productActiveCart = () => (dispatch) => {
  dispatch({
    type: LOADING_PRODUCT,
  });
  if (localStorage.getItem("product")) {
    console.log("datos guardados");
    dispatch({
      type: LOADING_PRODUCT,
      payload: JSON.parse([localStorage.getItem("product")]),
    });
    return;
  }
};

export const addToCart = (products) => (dispatch, getState) => {
  dispatch({
    type: LOADING_PRODUCT,
  });
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        name: products.name,
        id: products.id,
        price: products.price,
        image: products.image,
      },
    });
    localStorage.setItem(
      "product",
      JSON.stringify({
        name: products.name,
        id: products.id,
        price: products.price,
        image: products.image,
      })
    );
  } catch (error) {
    dispatch({
      type: LOADING_ERROR,
    });
  }
};
