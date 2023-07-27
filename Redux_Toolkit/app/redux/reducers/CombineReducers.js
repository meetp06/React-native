import {combineReducers} from '@reduxjs/toolkit';
import todoReducers from './TodoAddReducers';
import todoDelete from './TodoDeleteReducers';

const rootReducer = combineReducers({
  todo: todoReducers,
  todo1: todoDelete,
});

export default rootReducer;
