import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSaga from './UserSaga';
import {UserReducer} from './UserSlice';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: [saga],
});
saga.run(userSaga);
export default store;

// const rootSaga = yield all([])
