import { all } from 'redux-saga/effects';
import rootCartSaga from './cart/CartSaga';
import rootproductSaga from './product/ProductSaga';
import rootUserSaga from './user/UserSaga';

function* rootSaga() {
  yield all([rootproductSaga(), rootCartSaga(), rootUserSaga()]);
}

export default rootSaga;
