import { all, call, put, takeLeading } from 'redux-saga/effects';
import { API_CONSTANTS } from '../../constants';
import { ApiService } from '../../services';
import {
  getOrdersPending,
  getOrdersRejected,
  getOrdersSuccess,
} from './OrderSlice';

//* get order worker
function* getOrderWorker({ payload: apiOptions }) {
  try {
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.ORDER_URL(apiOptions.userId))
    );
    yield put(getOrdersSuccess(response.data ?? []));
  } catch (error) {
    yield put(getOrdersRejected(error));
  }
}

//* get orders watcher
function* getOrderWatcher() {
  yield takeLeading(getOrdersPending.type, getOrderWorker);
}

//* root order saga
export function* rootOrderSaga() {
  yield all([getOrderWatcher()]);
}
