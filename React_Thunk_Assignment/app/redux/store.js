import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {CartReducer} from './cart/CartSlice';
import {ProductReducer} from './product/ProductSlice';
import {UserReducer} from './user/UserSlice';

const persisteConfig = {
  key: 'persisStore',
  storeage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: UserReducer,
    cart: CartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
