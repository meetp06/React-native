import {USER_LIST} from '../actions/ActionTypes';

const initialState = {userList: []};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST: {
      return {
        ...state,
        userList: [...state.userList, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default userListReducer;
