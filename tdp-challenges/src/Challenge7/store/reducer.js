import {ADD_TO_CART, REMOVE_FROM_CART,LOGIN_USER,LOGOUT_USER} from './action'

const initialValues = {
    cart: [],
    user: null,
};

export const reducer = (state=initialValues, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
        const newCart = state.cart.filter((_item, index) => index !== action.payload);
      return {
        ...state,
        cart: newCart
      };
    case LOGIN_USER:
      return state;
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
};
