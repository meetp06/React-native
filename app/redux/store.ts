import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';
import { UserReducer } from './user/UserSlice';

const saga = createSagaMiddleware();

const persisteConfig = {
  key: 'persisStore',
  storage: AsyncStorage,
  blacklist: ['pageNumber', 'userListData'],
};

const persistedReducer = persistReducer(persisteConfig, UserReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});
saga.run(RootSaga);

export const persistor = persistStore(store);
