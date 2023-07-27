import {ADD_PAGE} from '../actions/ActionTypes';

const initialState = {
  page: 1,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE: {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    default:
      return state;
  }
};

export default pageReducer;
