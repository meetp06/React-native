import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../config/ApiConfig';

const authentication = {
  'X-Authorization': 'pk_52399ce973ad1c67d24660be65c461625a54aa2b351b8',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const fetchProduct = createAsyncThunk('products', async (_, api) => {
  try {
    const response = await Api.get(`products`, {}).then(
      response => response.data.data,
    );
    return response;
  } catch (e) {
    return api.rejectWithValue(e.message);
  }
});

const fetchcategory = createAsyncThunk('category', async (_, api) => {
  try {
    const response = await Api.get(`categories`, {}).then(
      response => response.data.data,
    );
    return response;
  } catch (e) {
    api.rejectWithValue(e.message);
  }
});

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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.isFetchProducts === true;
    }),
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.isFetchProducts = false;
      }),
      builder.addCase(fetchProduct.rejected, (state, action) => {
        state.isFetchProducts = false;
        state.errorMessage = action.payload;
      }),
      builder.addCase(fetchcategory.pending, state => {
        state.isFetchcategorys = true;
      }),
      builder.addCase(fetchcategory.fulfilled, (state, action) => {
        state.isFetchcategorys = false;
        state.categoryData = action.payload;
      }),
      builder.addCase(fetchcategory.rejected, (state, action) => {
        state.isFetchcategorys = false;
        state.errorMessage = action.payload;
      });
  },
});

export const ProductReducer = ProductSlice.reducer;
export const ProductAction = {fetchProduct, fetchcategory};
