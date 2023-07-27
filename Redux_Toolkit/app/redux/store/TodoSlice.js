import {createSlice} from '@reduxjs/toolkit';

const initialState = {todoList: []};

const TodoSlice = createSlice({
  // 4 params name, initialstate, reduecrs, extrareducers
  name: 'todo',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todoList.push(action.payload);
    },

    clearItem: state => {
      state.todoList.splice(0, state.todoList.length);
    },

    edit: (state, action) => {
      state.todoList[action.payload.index] = action.payload.updatedValue;
    },

    remove: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
  },

  extraReducers: builder => {
    builder.addCase('increaseLengthNumber', (state, action) => {
      //add your increaseLengthNumber logic
    });
  },
});

export const {add, edit, remove, clearItem} = TodoSlice.actions;
export default TodoSlice.reducer;
