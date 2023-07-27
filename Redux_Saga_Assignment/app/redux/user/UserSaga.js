import { all, call, put, takeLeading } from 'redux-saga/effects';
import Api from '../../config/ApiConfig';
import {
  addUserIsFulfilled,
  addUserIsRejected,
  checkUserIsFulfilled,
  checkUserIsRejected,
  fetchCartIsFulfilled,
  fetchCartIsRejected,
} from './UserSlice';

function* rootUserSaga() {
  yield all([userSaga(), fetchCartSaga(), userIsLoginSaga()]);
}

function* fetchCart() {
  try {
    const getCart = yield Api.get(`carts`);

    yield put(fetchCartIsFulfilled(getCart.data));
  } catch (e) {
    yield put(fetchCartIsRejected(e.toString()));
  }
}

function* fetchCartSaga() {
  yield takeLeading('user/fetchCartIsPending', fetchCart);
}

function* addUser(action) {
  try {
    const newCart = yield call(() => Api.get(`carts`));
    const user = action.payload;
    const newUser = yield call(() =>
      Api.post(`customers`, {
        firstname: user.username,
        email: user.email,
        meta: {
          cart: newCart.data,
          password: user.password,
        },
      })
    );
    yield put(addUserIsFulfilled(newUser.data));
  } catch (e) {
    yield put(addUserIsRejected(e.toString()));
  }
}

function* userSaga() {
  yield takeLeading('user/addUserIsPending', addUser);
}

function* userIsLogin() {
  try {
    const userLogin = yield call(Api.get(`customers?query=${email}`));
    yield put(checkUserIsFulfilled(userLogin.data));
  } catch (e) {
    yield put(checkUserIsRejected(e.toString()));
  }
}

function* userIsLoginSaga() {
  yield takeLeading('user/checkUserIsPending', userIsLogin);
}

export default rootUserSaga;
