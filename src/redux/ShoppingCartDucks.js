import {db} from '../firebase'
import shortid from 'shortid'
//const
const initialData = {
  selection: false,
  loading_Product: false,
  activoProduct: false,
  array: [],
  offset: 0,
};
//type
const LOADING_PRODUCT = "LOADING_PRODUCT";
const ADD_TO_CART = "ADD_TO_CART";
const LOADING_ERROR = "LOADING_ERROR";
const PRODUCT_DELETE = "PRODUCT_DELETE";

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
    case PRODUCT_DELETE:
      return Object.assign({}, state, { array: action.payload });
    case LOADING_ERROR:
      return { initialData };
    default:
      return { ...state };
  }
}

//action

export const deleteProduct = (products) => (dispatch, getState) => {
  dispatch({
    type: LOADING_PRODUCT,
  });
  const array = getState().cart.array;
  const arrayFiltrado = array.filter((item) => item.id !== products.id);

  dispatch({
    type: PRODUCT_DELETE,
    payload: arrayFiltrado,
  });
};

export const addToCart = (products) => (dispatch) => {
  dispatch({
    type: LOADING_PRODUCT,
  });
  try {
    const product = {
      name: products.name,
      price: products.price,
      image: products.image,
      id: shortid.generate()
    }
    const productItem = db.collection('products').add(product)
    console.log(productItem)
    dispatch({
      type: ADD_TO_CART,
      payload: product
    })
    localStorage.setItem(product.id, JSON.stringify(product))

  } catch (error) {
    dispatch({
      type: LOADING_ERROR,
    });
    console.log(error)
  }
};
