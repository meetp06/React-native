import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { CartReducer } from './cart/CartSlice';
import { ProductReducer } from './product/ProductSlice';
import rootSaga from './rootSaga';
import { UserReducer } from './user/UserSlice';

const saga = createSagaMiddleware();

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});

saga.run(rootSaga);

export default store;
