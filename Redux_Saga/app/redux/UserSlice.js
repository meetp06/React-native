import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: [],
  userIsLoading: false,
  errorMessage: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserIsPending: state => {
      state.userIsLoading = true;
    },
    fetchUserIsFullfiled: (state, action) => {
      state.user = action.payload;
      state.userIsLoading = false;
    },
    fetchUserIsRejected: (state, action) => {
      state.userIsLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const {fetchUserIsPending, fetchUserIsFullfiled, fetchUserIsRejected} =
  UserSlice.actions;
