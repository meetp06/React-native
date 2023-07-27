import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, legacy_createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { counterReducer } from './counter';
import { todoReducer } from './todo';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todo'],
};

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer as never);

const store = legacy_createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
