import { createSlice } from '@reduxjs/toolkit';
import { Strings } from '../../constants';
import { UserSchemaType } from './UserSaga';

interface InitialStateType {
  userListData: Array<UserSchemaType>;
  isUserFetch: boolean;
  errorMessage: string;
  pageNumber: number;
  loadingStatus: string;
}

const initialState: InitialStateType = {
  userListData: [],
  isUserFetch: false,
  errorMessage: '',
  pageNumber: 1,
  loadingStatus: 'loading',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    fetchUserIsPending: (state, action) => {
      state.isUserFetch = true;
      state.loadingStatus = 'load/pending';
    },
    fetchUserIsFulfilled: (state, action) => {
      state.loadingStatus = 'load/success';
      if (state.userListData.length === 0) {
        state.userListData = action.payload;
        return;
      }
      state.userListData = [...state.userListData, ...action.payload];
      state.isUserFetch = false;
    },
    fetchUserIsRejected: (state, action) => {
      state.isUserFetch = false;
      state.errorMessage = action.payload;
      state.loadingStatus = 'load/failed';
    },
  },
  extraReducers: builder => {
    builder.addCase(Strings.InsideAppStrings.Logout, state => {
      return initialState;
    });
  },
});

export const UserReducer = UserSlice.reducer;
export const {
  fetchUserIsPending,
  fetchUserIsFulfilled,
  fetchUserIsRejected,
  setPageNumber,
} = UserSlice.actions;
