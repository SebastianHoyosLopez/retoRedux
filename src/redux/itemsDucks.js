import axios from "axios";

// constantes

const initialData = {
  array: []
};

//type
const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";

// reducer
export default function itemsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// action

export const getItemsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch({
      type: GET_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
