import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUserFromData = createAsyncThunk('userBodyData', async (_, api) => {
  try {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.data);
    return response;
  } catch (e) {
    return api.rejectWithValue(e.message);
  }
});

const initialState = {
  userData: [],
  fetchUser: false,
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserFromData.pending, state => {
      state.fetchUser = true;
    });

    builder.addCase(fetchUserFromData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.fetchUser = false;
    });
    builder.addCase(fetchUserFromData.rejected, (state, action) => {
      state.fetchUser = false;
      state.errorMessage = action.payload;
    });
  },
});

export const UserReducers = userSlice.reducer;
export const UserActions = {fetchUserFromData};
