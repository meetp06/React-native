import { createSlice } from '@reduxjs/toolkit';

// const checkoutItem = createAsyncThunk('checkoutItem', async (_, api) => {
//   try {
//     const response = await Api.get(`checkouts/YfFoyi`);
//     return response;
//   } catch (e) {
//     return api.rejectWithValue(e);
//   }
// });

const initialState = {
  newCartData: {},
  isAddItemTOCart: false,
  checkoutItemData: [{}],
  isCheckoutItem: false,
  errorMessage: '',
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemTOCartIsPending: (state) => {
      state.isAddItemTOCart = true;
    },
    addItemTOCartIsFulfilled: (state, action) => {
      state.newCartData = action.payload;
      state.isAddItemTOCart = false;
    },
    addItemTOCartIsRejected: (state, action) => {
      state.errorMessage = action.payload;
      state.isAddItemTOCart = false;
    },
    checkoutItemIsPending: (state) => {
      state.isCheckoutItem = true;
    },
    checkoutItemIsFulfilled: (state, action) => {
      state.checkoutItemData = action.payload;
      state.isCheckoutItem = false;
    },
    checkoutItemIsRejected: (state, action) => {
      state.isCheckoutItem = false;
      state.errorMessage = action.payload;
    },
  },
});

export const CartReducer = CartSlice.reducer;

export const {
  addItemTOCartIsPending,
  addItemTOCartIsFulfilled,
  addItemTOCartIsRejected,
  checkoutItemIsFulfilled,
  checkoutItemIsPending,
  checkoutItemIsRejected,
} = CartSlice.actions;
