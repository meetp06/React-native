import { all, call, put, takeLeading } from 'redux-saga/effects';
import { API_CONSTANTS } from '../../constants';
import { ApiService } from '../../services';
import { updateCustomerPending } from '../user';
import {
  addCartPending,
  addCartRejected,
  addCartSuccess,
  createCartPending,
  createCartRejected,
  createCartSuccess,
  emptyCartPending,
  emptyCartRejected,
  emptyCartSuccess,
  getCartPending,
  getCartRejected,
  getCartSuccess,
  removeFromCartPending,
  removeFromCartRejected,
  removeFromCartSuccess,
  updateCartPending,
  updateCartRejected,
  updateCartSuccess,
} from './CartSlice';

//* create cart worker
function* createCartWorker({ payload: userDetails }) {
  try {
    const response = yield call(() => ApiService.get(API_CONSTANTS.CART_URL));
    yield put(createCartSuccess(response));
    yield put(
      updateCustomerPending({
        ...userDetails,
        meta: {
          ...userDetails.meta,
          cartId: response.id,
        },
      })
    );
  } catch (error) {
    yield put(createCartRejected(error));
  }
}

//* create cart watcher
function* createCartWatcher() {
  yield takeLeading(createCartPending.type, createCartWorker);
}

//* get cart worker
function* getCartWorker({ payload: cartId }) {
  try {
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.GET_CART_URL(cartId))
    );
    yield put(getCartSuccess(response));
  } catch (error) {
    yield put(getCartRejected(error));
  }
}

//* get cart watcher
function* getCartWatcher() {
  yield takeLeading(getCartPending.type, getCartWorker);
}

//* add cart worker
function* addCartWorker({ payload: apiOptions }) {
  try {
    const response = yield call(() =>
      ApiService.post(
        API_CONSTANTS.ADD_CART_URL(apiOptions.cartId),
        apiOptions.body
      )
    );
    yield put(addCartSuccess(response));
  } catch (error) {
    yield put(addCartRejected(error));
  }
}

//* add cart watcher
function* addCartWatcher() {
  yield takeLeading(addCartPending.type, addCartWorker);
}

//* update cart worker
function* updateCartWorker({ payload: apiOptions }) {
  try {
    const response = yield call(() =>
      ApiService.put(API_CONSTANTS.UPDATE_CART_URL(apiOptions), apiOptions.body)
    );

    yield put(updateCartSuccess(response));
  } catch (error) {
    yield put(updateCartRejected(error));
  }
}

//* update cart watcher
function* updateCartWatcher() {
  yield takeLeading(updateCartPending.type, updateCartWorker);
}

//* remove from cart worker
function* removeFromCartWorker({ payload: apiOptions }) {
  try {
    const deleteResponse = yield call(() =>
      ApiService.delete(API_CONSTANTS.DELETE_CART_URL(apiOptions))
    );
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.GET_CART_URL(apiOptions.cartId))
    );
    yield put(removeFromCartSuccess(response));
  } catch (error) {
    yield put(removeFromCartRejected(error));
  }
}

//* remove from cart watcher
function* removeFromCartWatcher() {
  yield takeLeading(removeFromCartPending.type, removeFromCartWorker);
}

//* empty cart worker
function* emptyCartWorker({ payload: apiOptions }) {
  try {
    const checkout = yield call(() =>
      ApiService.get(API_CONSTANTS.CHECKOUT_URL(apiOptions.cartId))
    );
    const placeOrder = yield call(() =>
      ApiService.post(API_CONSTANTS.PLACE_ORDER_URL(checkout?.id), {
        customer: {
          id: apiOptions.userId,
        },
        payment: {
          gateway: 'test_gateway',
          card: {
            number: '4242 4242 4242 4242',
            expiry_month: 12,
            expiry_year: 2031,
            cvc: 890,
            postal_zip_code: '01903',
          },
        },
      })
    );
    yield put(emptyCartSuccess(placeOrder));
    yield put(createCartPending(apiOptions.userDetails));
  } catch (error) {
    yield put(emptyCartRejected(error));
  }
}

//* empty cart watcher
function* emptyCartWatcher() {
  yield takeLeading(emptyCartPending.type, emptyCartWorker);
}

export function* rootCartSaga() {
  yield all([
    addCartWatcher(),
    getCartWatcher(),
    emptyCartWatcher(),
    createCartWatcher(),
    updateCartWatcher(),
    removeFromCartWatcher(),
  ]);
}
