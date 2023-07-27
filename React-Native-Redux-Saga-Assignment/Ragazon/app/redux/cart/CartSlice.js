import { createSlice } from '@reduxjs/toolkit';
import { LOG_OUT, STRINGS } from '../../constants';

const initialState = {
  loadingStatus: STRINGS.idle,
  error: '',
  cartObject: {},
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    createCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    createCartSuccess: (state, action) => {
      state.cartObject = action.payload;
      state.loadingStatus = STRINGS.success;
      state.error = '';
    },
    createCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action?.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    getCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    getCartSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.cartObject = action.payload;
      state.error = '';
    },
    getCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action?.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    addCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    addCartSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.cartObject = action.payload;
    },
    addCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    updateCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    updateCartSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.cartObject = action.payload;
    },
    updateCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    removeFromCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    removeFromCartSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.cartObject = action.payload;
    },
    removeFromCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    emptyCartPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    emptyCartSuccess: (state) => {
      state.loadingStatus = STRINGS.success;
      state.cartObject = {};
      state.error = '';
    },
    emptyCartRejected: (state, action) => {
      state.loadingStatus = STRINGS.failed;
      state.error =
        action.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOG_OUT, (state) => {
      return initialState;
    });
  },
});

export const {
  createCartPending,
  createCartSuccess,
  createCartRejected,
  getCartPending,
  getCartSuccess,
  getCartRejected,
  addCartPending,
  addCartSuccess,
  addCartRejected,
  updateCartPending,
  updateCartSuccess,
  updateCartRejected,
  removeFromCartPending,
  removeFromCartSuccess,
  removeFromCartRejected,
  emptyCartPending,
  emptyCartSuccess,
  emptyCartRejected,
} = cartSlice.actions;

export const CartReducer = cartSlice.reducer;
