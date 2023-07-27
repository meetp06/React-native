import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isAddUser: false,
  loginData: {},
  isCheckUser: false,
  cartData: {},
  isFetchCart: false,
  errorMessage: '',
  isUpdateUser: false,
  isLogin: false,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserIsPending: (state) => {
      state.isAddUser = true;
    },
    addUserIsFulfilled: (state, action) => {
      state.userData = action.payload;
      state.cartData = action.payload.meta.cart;
      state.isAddUser = false;
    },
    addUserIsRejected: (state, action) => {
      state.isAddUser = false;
      state.errorMessage = action.payload;
    },
    checkUserIsPending: (state) => {
      state.isCheckUser = true;
    },
    checkUserIsFulfilled: (state, action) => {
      state.isCheckUser = false;
      state.loginData = action.payload;
    },
    checkUserIsRejected: (state, action) => {
      state.isCheckUser = false;
      state.errorMessage = action.payload;
    },
    fetchCartIsPending: (state) => {
      state.isFetchCart = true;
    },
    fetchCartIsFulfilled: (state, action) => {
      state.cartData = action.payload;
      state.isFetchCart = false;
    },
    fetchCartIsRejected: (state, action) => {
      state.errorMessage = action.payload;
      state.isFetchCart = false;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const {
  addUserIsFulfilled,
  addUserIsPending,
  addUserIsRejected,
  checkUserIsFulfilled,
  checkUserIsPending,
  checkUserIsRejected,
  fetchCartIsFulfilled,
  fetchCartIsPending,
  fetchCartIsRejected,
} = UserSlice.actions;
