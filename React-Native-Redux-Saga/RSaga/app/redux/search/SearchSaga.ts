import { debounce, put } from 'redux-saga/effects';
import { getCatPending } from '../cats';
import { handleDebounce, setSearchText } from './SearchSlice';

function* handleSearchText(action) {
  yield put(setSearchText(action.payload));
  yield put(getCatPending(action.payload));
}

export function* watchSearchText() {
  yield debounce(500, handleDebounce.type, handleSearchText);
}
