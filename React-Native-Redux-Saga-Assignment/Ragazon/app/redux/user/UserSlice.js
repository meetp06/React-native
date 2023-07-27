import { createSlice } from '@reduxjs/toolkit';
import { LOG_OUT, STRINGS } from '../../constants';

const initialState = {
  loadingStatus: STRINGS.idle,
  error: '',
  isLoggedIn: false,
  userDetails: {},
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    signUpPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    signUpSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.isLoggedIn = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    signUpRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error = action.payload.message;
    },
    loginPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    loginSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.isLoggedIn = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    loginRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error = action.payload.message;
    },
    updateCustomerPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    updateCustomerSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.isLoggedIn = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    updateCustomerRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOG_OUT, (state) => {
      return initialState;
    });
  },
});

export const {
  signUpPending,
  signUpSuccess,
  signUpRejected,
  loginPending,
  loginSuccess,
  loginRejected,
  updateCustomerPending,
  updateCustomerSuccess,
  updateCustomerRejected,
} = userSlice.actions;

export const UserReducer = userSlice.reducer;
