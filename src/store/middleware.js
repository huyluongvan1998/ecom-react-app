import { all, call } from 'redux-saga/effects';
import { ProductMiddleware } from './modules/product/saga';


export default function* rootSaga() {
  yield all([call(ProductMiddleware)]);
}
