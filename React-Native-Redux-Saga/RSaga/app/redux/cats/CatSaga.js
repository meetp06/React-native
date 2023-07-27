import { nanoid } from '@reduxjs/toolkit';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { ApiService } from '../../services';
import { watchSearchText } from '../search';
import {
  getAllCatPending,
  getAllCatRejected,
  getAllCatSuccess,
  getCatBreedPending,
  getCatBreedRejected,
  getCatBreedSuccess,
  getCatPending,
  getCatRejected,
  getCatSuccess,
} from './CatSlice';

function* getCatBreedWorkerSaga() {
  try {
    yield delay(1000);
    const response = yield call(() => ApiService.get('breeds'));
    const catBreeds = response.data.map((cat) => ({
      id: cat.id,
      name: cat.name,
    }));
    catBreeds.unshift({ id: nanoid(), name: 'All' });
    yield put(getCatBreedSuccess(catBreeds));
  } catch (error) {
    yield put(getCatBreedRejected(error));
  }
}

function* getCatBreedWatcherSaga() {
  yield takeLatest(getCatBreedPending.type, getCatBreedWorkerSaga);
}

function* getCatWorkerSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(() =>
      ApiService.get(
        `images/search?breed_ids=${action.payload}&include_breeds=true`
      )
    );
    yield put(getCatSuccess(response.data));
  } catch (error) {
    yield put(getCatRejected(error));
  }
}

function* getCatWatcherSaga() {
  yield takeLatest(getCatPending.type, getCatWorkerSaga);
}

function* getAllCatWorkerSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(() =>
      ApiService.get(`breeds?page=${action.payload}&limit=10`)
    );

    const isEndReached = response.data.length <= 1;
    yield put(getAllCatSuccess({ data: response.data, isEndReached }));
  } catch (error) {
    yield put(getAllCatRejected(error));
  }
}

function* getAllCatWatcherSaga() {
  yield takeLatest(getAllCatPending.type, getAllCatWorkerSaga);
}

export function* rootSaga() {
  yield all([
    getCatBreedWatcherSaga(),
    getCatWatcherSaga(),
    getAllCatWatcherSaga(),
    watchSearchText(),
  ]);
}
