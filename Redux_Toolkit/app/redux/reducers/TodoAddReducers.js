import {createReducer} from '@reduxjs/toolkit';

const todoReducers = createReducer({todoList: []}, builder => {
  builder.addCase('todo/add', (state, action) => {
    state.push(action.payload);
  });
});

export default todoReducers;
