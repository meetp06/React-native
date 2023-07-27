import { all, call, put, takeLeading } from 'redux-saga/effects';
import { API_CONSTANTS, STRINGS } from '../../constants';
import { ApiService } from '../../services';
import { createCartPending, getCartPending } from '../cart';
import {
  loginPending,
  loginRejected,
  loginSuccess,
  signUpPending,
  signUpRejected,
  signUpSuccess,
  updateCustomerPending,
  updateCustomerRejected,
  updateCustomerSuccess,
} from './UserSlice';

//* Signup worker
function* signUpWorker({ payload: userDetails }) {
  try {
    const response = yield call(() =>
      ApiService.post(API_CONSTANTS.SIGN_UP_URL, userDetails)
    );

    yield put(signUpSuccess(response));
    yield put(createCartPending(response));
  } catch (error) {
    if (error?.response?.data?.status_code === 422)
      yield put(
        signUpRejected({ message: STRINGS.GeneralErrors.emailAlreadyTaken })
      );
    else yield put(signUpRejected(error));
  }
}

//* Signup watcher
function* signUpWatcher() {
  yield takeLeading(signUpPending.type, signUpWorker);
}

//* Login Worker
function* loginWorker({ payload: userDetails }) {
  try {
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.LOGIN_URL(userDetails.email))
    );

    const user =
      response?.data?.filter(
        (user) =>
          user.email === userDetails.email &&
          user.meta.password === userDetails.password
      ) ?? [];

    if (user.length === 0)
      throw { message: STRINGS.GeneralErrors.invalidCredentials };

    yield put(getCartPending(user[0].meta.cartId));
    yield put(loginSuccess(user[0]));
  } catch (error) {
    yield put(loginRejected(error));
  }
}

//* login watcher
function* loginWatcher() {
  yield takeLeading(loginPending.type, loginWorker);
}

//* Update customer worker
function* updateCustomerWorker({ payload: userDetails }) {
  try {
    const response = yield call(() =>
      ApiService.put(API_CONSTANTS.UPDATE_URL(userDetails.id), userDetails)
    );

    yield put(updateCustomerSuccess(response));
  } catch (error) {
    yield put(updateCustomerRejected(error));
  }
}

//* update customer watcher
function* updateCustomerWatcher() {
  yield takeLeading(updateCustomerPending.type, updateCustomerWorker);
}

//* Root user saga
export function* rootUserSaga() {
  yield all([loginWatcher(), signUpWatcher(), updateCustomerWatcher()]);
}
