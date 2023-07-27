import {combineReducers} from 'redux';
import pageReducer from './PageReducer';
import userListReducer from './UserListReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  users: userReducer,
  page: pageReducer,
  userList: userListReducer,
});

export default rootReducer;
