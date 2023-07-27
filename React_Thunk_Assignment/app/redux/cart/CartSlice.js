import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../config/ApiConfig';

const addItemTOCart = createAsyncThunk('addItemTOCart', async (arg, api) => {
  try {
    const response = await Api.post(`carts/${arg.cartId}`, {
      id: arg.id,
    });
    return response.data;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

const checkoutItem = createAsyncThunk('checkoutItem', async (_, api) => {
  try {
    const response = await Api.get(`checkouts/YfFoyi`);
    return response;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addItemTOCart.pending, state => {
      state.isAddItemTOCart = true;
    }),
      builder.addCase(addItemTOCart.fulfilled, (state, action) => {
        state.newCartData = action.payload;
        state.isAddItemTOCart = false;
      }),
      builder.addCase(addItemTOCart.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isAddItemTOCart = false;
      }),
      builder.addCase(checkoutItem.pending, state => {
        state.isCheckoutItem = true;
      }),
      builder.addCase(checkoutItem.fulfilled, (state, action) => {
        state.checkoutItemData = action.payload;
        state.isCheckoutItem = false;
      }),
      builder.addCase(checkoutItem.rejected, (state, action) => {
        state.isCheckoutItem = false;
        state.errorMessage = action.payload;
      });
  },
});

export const CartReducer = CartSlice.reducer;
export const CartAction = {addItemTOCart, checkoutItem};
