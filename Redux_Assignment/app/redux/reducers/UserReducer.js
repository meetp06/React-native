import {ADD_USER} from '../actions/ActionTypes';

const initialState = {users: []};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {users: [...state.users, action.payload]};

    default:
      return state;
  }
};

export default userReducer;
