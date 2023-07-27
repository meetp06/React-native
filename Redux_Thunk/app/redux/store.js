import {configureStore} from '@reduxjs/toolkit';
import {UserReducers} from './user-slice/UserSlice';

export const store = configureStore({
  reducer: {
    user: UserReducers,
  },
});
