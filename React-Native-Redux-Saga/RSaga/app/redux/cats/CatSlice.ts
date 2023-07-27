import { createSlice } from '@reduxjs/toolkit';
import { STRINGS } from '../../constants';

const initialState = {
  cat: {
    loadingStatus: STRINGS.idle,
    error: '',
    list: [],
  },

  breed: {
    loadingStatus: STRINGS.idle,
    error: '',
    list: [],
  },

  pagination: {
    loadingStatus: STRINGS.idle,
    error: '',
    page: 0,
    isEndReached: false,
  },
};

const catSlice = createSlice({
  initialState,
  name: 'catList',
  reducers: {
    getCatBreedPending: (state) => {
      state.breed.loadingStatus = STRINGS.pending;
    },
    getCatBreedSuccess: (state, action) => {
      state.breed.loadingStatus = STRINGS.success;
      state.breed.list = action.payload;
      state.breed.error = '';
    },
    getCatBreedRejected: (state, action) => {
      state.breed.loadingStatus = STRINGS.failed;
      state.breed.error = action.payload;
    },
    getCatPending: (state) => {
      state.cat.loadingStatus = STRINGS.pending;
    },
    getCatSuccess: (state, action) => {
      state.pagination = initialState.pagination;
      state.cat.loadingStatus = STRINGS.success;
      state.cat.list = action.payload;
      state.cat.error = '';
    },
    getCatRejected: (state, action) => {
      state.cat.loadingStatus = STRINGS.failed;
      state.cat.error = action.payload;
    },
    getAllCatPending: (state) => {
      if (state.pagination.page === 0)
        state.cat.loadingStatus = STRINGS.pending;
      else state.pagination.loadingStatus = STRINGS.pending;
    },
    getAllCatSuccess: (state, action) => {
      state.cat.list.pop();

      if (state.pagination.page === 0) {
        state.cat.loadingStatus = STRINGS.success;
        state.cat.error = '';
      } else {
        state.pagination.loadingStatus = STRINGS.success;
        state.pagination.error = '';
      }

      state.pagination.page++;
      if (action.payload.isEndReached) state.pagination.isEndReached = true;
      state.cat.list.push(...action.payload.data);
    },
    getAllCatRejected: (state, action) => {
      if (state.pagination.page === 0) {
        state.cat.loadingStatus = STRINGS.failed;
        state.cat.error = action.payload;
      } else {
        state.pagination.loadingStatus = STRINGS.failed;
        state.pagination.error = action.payload;
      }
    },
  },
});

export const {
  getCatBreedSuccess,
  getCatBreedPending,
  getCatBreedRejected,
  getCatPending,
  getCatRejected,
  getCatSuccess,
  getAllCatPending,
  getAllCatRejected,
  getAllCatSuccess,
} = catSlice.actions;

export const CatReducer = catSlice.reducer;
