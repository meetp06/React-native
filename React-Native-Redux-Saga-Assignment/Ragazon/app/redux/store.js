import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { CartReducer } from './cart';
import { rootCartSaga } from './cart/CartSaga';
import { OrderReducer, rootOrderSaga } from './orders';
import { ProductReducer } from './products';
import { rootProductsSaga } from './products/ProductSaga';
import { UserReducer, rootUserSaga } from './user';

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  user: UserReducer,
  order: OrderReducer,
});

function* rootSaga() {
  yield all([
    rootUserSaga(),
    rootCartSaga(),
    rootOrderSaga(),
    rootProductsSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
