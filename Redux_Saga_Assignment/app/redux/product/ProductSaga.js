import { all, call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../config/ApiConfig';
import {
  fetchProductIsFulfilled,
  fetchProductIsRejected,
  fetchcategoryIsFulfilled,
  fetchcategoryIsRejected,
} from './ProductSlice';

function* rootproductSaga() {
  yield all([categorySaga(), productSaga()]);
}

function* getProduct() {
  //worker saga for get product
  try {
    const listOfProduct = yield call(() => Api.get(`products`));
    yield put(fetchProductIsFulfilled(listOfProduct.data.data));
  } catch (e) {
    yield put(fetchProductIsRejected(e.toString()));
  }
}

function* productSaga() {
  //watcher saga for productSaga
  yield takeEvery('product/fetchProductIsPending', getProduct);
}

function* getCategory() {
  //worker saga for get category
  try {
    const category = yield call(() => Api.get(`categories`));
    yield put(fetchcategoryIsFulfilled(category.data.data));
  } catch (e) {
    yield put(fetchcategoryIsRejected(e.toString()));
  }
}

function* categorySaga() {
  //watcher saga for categorySaga
  yield takeEvery('product/fetchcategoryIsPending', getCategory);
}
export default rootproductSaga;
