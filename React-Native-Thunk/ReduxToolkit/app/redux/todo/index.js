import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services';
import { logOut } from '../actions';

const initialState = {
  loading: 'idle',
  todoList: [],
  error: '',
};

const ADD_TODO = 'ADD_TODO';

const createAsyncThunkWithErrorHandler = (typePrefix, asyncLogic) => {
  return createAsyncThunk(
    typePrefix,
    async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
        const data = await asyncLogic(_);
        return data;
      } catch (error) {
        // return error;
        return rejectWithValue(error);
      }
    }
  );
};

export const addTodo = createAsyncThunkWithErrorHandler(
  ADD_TODO,
  async (userInput) => {
    console.log('====================================');
    console.log(userInput);
    console.log('====================================');
    const response = await ApiService.get('task/add');
    return response.data;
  }
);

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  extraReducers: (builder) => {
    builder.addCase(`${ADD_TODO}/fulfilled`, (state, action) => {
      state.loading = 'success';
      state.todoList = action.payload;
    });
    builder.addCase(`${ADD_TODO}/rejected`, (state, action) => {
      state.loading = 'failed';
      state.error = action.error;
    });
    builder.addCase(`${ADD_TODO}/pending`, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(logOut, (_) => initialState);
  },
});

export const TodoReducer = todoSlice.reducer;
