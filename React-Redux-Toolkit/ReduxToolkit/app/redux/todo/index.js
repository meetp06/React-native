import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { logOut } from '../actions';

export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors((state) => state.todo);

const todoSlice = createSlice({
  initialState: todoAdapter.getInitialState(),
  name: 'todo',
  reducers: {
    addTodo: todoAdapter.addOne,
    updateTodo: todoAdapter.updateOne,
    deleteTodo: todoAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(logOut, (_) => {
      return todoAdapter.getInitialState();
    });
  },
});

export const TodoReducer = todoSlice.reducer;
export const TodoActions = todoSlice.actions;
