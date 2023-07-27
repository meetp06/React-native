import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { API_CONSTANTS } from '../../constants';
import { ApiService } from '../../services';
import {
  getCategoriesPending,
  getCategoriesRejected,
  getCategoriesSuccess,
  getProductsPending,
  getProductsRejected,
  getProductsSuccess,
} from './ProductSlice';

//* get categories worker
function* getCategoriesWorker() {
  try {
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.CATEGORIES_URL)
    );
    yield put(getCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getCategoriesRejected(error));
  }
}

//* get categories watcher
function* getCategoriesWatcher() {
  yield takeLeading(getCategoriesPending.type, getCategoriesWorker);
}

//* get products worker
function* getProductsWorker({ payload: url }) {
  try {
    const response = yield call(() =>
      ApiService.get(API_CONSTANTS.PRODUCTS_URL(url))
    );
    yield put(getProductsSuccess(response.data));
  } catch (error) {
    yield put(getProductsRejected(error));
  }
}

//* get products watcher
function* getProductsWatcher() {
  yield takeLatest(getProductsPending.type, getProductsWorker);
}

//* root products saga
export function* rootProductsSaga() {
  yield all([getProductsWatcher(), getCategoriesWatcher()]);
}
