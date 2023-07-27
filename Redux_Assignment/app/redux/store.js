import AsyncStorage from '@react-native-async-storage/async-storage';
import {legacy_createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers/RootReducer';
const persistConfig = {
  key: 'persisteStore',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
export default store;
