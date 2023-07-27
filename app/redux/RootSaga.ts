import {all} from 'redux-saga/effects';
import rootUserSaga from './user/UserSaga';

function* RootSaga() {
  yield all([rootUserSaga()]);
}

export default RootSaga;
