import {Products} from '../components/Products'
//const
const initialData = {
  loading: false,
};
//type

//reducer
export default function shoppingReducer(state = initialData, action) {
    switch(action.type) {
        case LOADING:
            return{...state, loading: true}
    }
}

//action
export const addToCart = (Products) => async (dispatch) => {
    dispatch({
        type: LOADING,
                
    })
    console.log(Products)
}