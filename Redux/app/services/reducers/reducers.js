import {ADD_TO_CART} from '../constants';

const initialState = {
  cartData: [],
};
const cartItem = (action, state = initialState) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
      break;
    default:
      return state;
  }
};
export default cartItem;
