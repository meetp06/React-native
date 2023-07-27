import { createSlice, nanoid } from '@reduxjs/toolkit';
import { LOG_OUT, STRINGS } from '../../constants';

const initialState = {
  search: {
    isSearchEnabled: false,
    searchText: '',
  },
  product: {
    list: [],
    loadingStatus: STRINGS.idle,
    error: '',
  },
  category: {
    list: [],
    loadingStatus: STRINGS.idle,
    error: '',
  },
};

const productSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    toggleSearch: (state) => {
      if (state.search.isSearchEnabled) state.search.searchText = '';
      state.search.isSearchEnabled = !state.search.isSearchEnabled;
    },
    setSearchText: (state, action) => {
      state.search.searchText = action.payload;
    },
    getCategoriesPending: (state) => {
      state.category.loadingStatus = STRINGS.pending;
    },
    getCategoriesSuccess: (state, action) => {
      state.category.loadingStatus = STRINGS.success;
      state.category.list = action.payload.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      state.category.list.unshift({ id: nanoid(), name: 'All' });
      state.category.error = '';
    },
    getCategoriesRejected: (state, action) => {
      state.category.loadingStatus = STRINGS.failed;
      state.category.error =
        action.payload?.message ?? STRINGS.GeneralErrors.pleaseTryAgain;
    },
    getProductsPending: (state) => {
      state.product.loadingStatus = STRINGS.pending;
    },
    getProductsSuccess: (state, action) => {
      state.product.loadingStatus = STRINGS.success;
      state.product.list = action.payload;
      state.search.searchText += ' ';
      state.product.error = '';
    },
    getProductsRejected: (state, action) => {
      state.product.loadingStatus = STRINGS.failed;
      state.product.error =
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
  getCategoriesPending,
  getCategoriesRejected,
  getCategoriesSuccess,
  getProductsPending,
  getProductsRejected,
  getProductsSuccess,
  setSearchText,
  toggleSearch,
} = productSlice.actions;
export const ProductReducer = productSlice.reducer;
