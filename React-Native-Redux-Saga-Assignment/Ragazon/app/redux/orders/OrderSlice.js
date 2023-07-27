import { createSlice } from '@reduxjs/toolkit';
import { LOG_OUT, STRINGS } from '../../constants';

const initialState = {
  loadingStatus: STRINGS.idle,
  error: '',
  orderList: [],
};

const orderSlice = createSlice({
  initialState,
  name: 'order',
  reducers: {
    getOrdersPending: (state) => {
      state.loadingStatus = STRINGS.pending;
    },
    getOrdersSuccess: (state, action) => {
      state.loadingStatus = STRINGS.success;
      state.orderList = action.payload.reverse();
    },
    getOrdersRejected: (state, action) => {
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

export const { getOrdersPending, getOrdersSuccess, getOrdersRejected } =
  orderSlice.actions;
export const OrderReducer = orderSlice.reducer;
