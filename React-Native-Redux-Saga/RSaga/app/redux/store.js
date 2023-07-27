import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { CatReducer, rootSaga } from './cats';
import { SearchReducer } from './search';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cat: CatReducer,
    search: SearchReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
