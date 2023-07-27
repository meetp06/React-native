import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../services';
import { fetchUserIsFulfilled, fetchUserIsRejected } from './UserSlice';

function* rootUserSaga() {
  yield all([userSaga()]);
}

interface AxiosResponseType {
  data: UserSchemaType[];
}

export interface UserSchemaType {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

function* getUser(action: any): Generator {
  //worker saga for get user
  try {
    const response = yield call(() => Api.get(`?page=${action.payload}`));
    const listOfUser = response as AxiosResponse<AxiosResponseType>;
    yield put(fetchUserIsFulfilled(listOfUser.data.data));
  } catch (error: unknown) {
    if (error instanceof Error) yield put(fetchUserIsRejected(error.message));
  } finally {
  }
}

function* userSaga() {
  //watcher saga for userSaga
  yield takeLatest('user/fetchUserIsPending', getUser);
}

export default rootUserSaga;
