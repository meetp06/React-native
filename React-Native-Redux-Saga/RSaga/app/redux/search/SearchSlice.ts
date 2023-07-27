import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchEnabled: false,
  searchText: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchEnabled: (state) => {
      if (state.isSearchEnabled) state.searchText = '';
      state.isSearchEnabled = !state.isSearchEnabled;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchEnabled, setSearchText } = searchSlice.actions;
export const handleDebounce = createAction('handleDebounce');
export default searchSlice.reducer;
