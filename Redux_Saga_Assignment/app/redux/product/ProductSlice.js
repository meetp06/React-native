import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  categoryData: [],
  isFetchProducts: false,
  isFetchcategorys: false,
  errorMessage: '',
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductIsPending: (state) => {
      state.isFetchProducts === true;
    },
    fetchProductIsFulfilled: (state, action) => {
      state.productData = action.payload;
      state.isFetchProducts = false;
    },
    fetchProductIsRejected: (state, action) => {
      state.isFetchProducts = false;
      // state.errorMessage = action.payload;
    },
    fetchcategoryIsPending: (state) => {
      state.isFetchcategorys = true;
    },
    fetchcategoryIsFulfilled: (state, action) => {
      state.isFetchcategorys = false;
      state.categoryData = action.payload;
    },
    fetchcategoryIsRejected: (state, action) => {
      state.isFetchcategorys = false;
      // state.errorMessage = action.payload;
    },
  },
});

export const ProductReducer = ProductSlice.reducer;
export const {
  fetchProductIsPending,
  fetchProductIsFulfilled,
  fetchProductIsRejected,
  fetchcategoryIsPending,
  fetchcategoryIsFulfilled,
  fetchcategoryIsRejected,
} = ProductSlice.actions;
