import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchUserIsFullfiled, fetchUserIsRejected} from './UserSlice';

function* getUsers() {
  // worker saga
  try {
    const user = yield call(() =>
      axios.get('https://api.thecatapi.com/v1/images/search?limit=10'),
    );
    yield put(fetchUserIsFullfiled(user.data));
  } catch (e) {
    yield put(fetchUserIsRejected(e.toString()));
  }
}

function* userSaga() {
  // watcher saga
  yield takeEvery('user/fetchUserIsPending', getUsers);
}

export default userSaga;
