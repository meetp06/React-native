import {createReducer} from '@reduxjs/toolkit';

const todoDelete = createReducer({teamList: []}, builder => {
  builder.addCase('todo/Delete', (state, action) => {
    state.splice(action.payload, 1);
  });
});

export default todoDelete;
