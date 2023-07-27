import { all, call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import Api from '../../config/ApiConfig';
import {
  addItemTOCartIsFulfilled,
  addItemTOCartIsRejected,
  checkoutItemIsFulfilled,
  checkoutItemIsRejected,
} from './CartSlice';

function* rootCartSaga() {
  yield all([CartSaga(), checkoutSaga()]);
}

function* getCart(action) {
  const arg = action.payload;
  try {
    const cart = yield call(() =>
      Api.post(`carts/${arg.cartId}`, { id: arg.id })
    );
    yield put(addItemTOCartIsFulfilled(cart.data));
  } catch (e) {
    yield put(addItemTOCartIsRejected(e.toString()));
  }
}

function* CartSaga() {
  yield takeEvery('cart/addItemTOCartIsPending', getCart);
}

function* checkoutItem() {
  try {
    const checkout = yield call(() => Api.get(`checkouts/YfFoyi`));
    yield put(checkoutItemIsFulfilled(checkout.data));
  } catch (e) {
    yield put(checkoutItemIsRejected(e.toString()));
  }
}

function* checkoutSaga() {
  yield takeLeading('cart/checkoutItemIsPending', checkoutItem);
}

export default rootCartSaga;
