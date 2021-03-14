import axios from 'axios';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchProduct, setFetchProduct } from "./slice";

function* handleFetchAllProduct() {
  try {
    const res = yield axios.get(" https://course-api.com/react-store-products");
    yield put(setFetchProduct(res.data));
  } catch (error) {

    console.error('error: ', error.message)
}
}

function* handleFetchProduct() {
  try {
    const res = yield axios.get(" https://course-api.com/react-store-products/id=1");
    yield put(setFetchProduct(res.data));
  } catch (error) {

    console.error('error: ', error.message)
}
}

function* handleFetchProductSaga() {
  yield takeLatest(fetchProduct, handleFetchProduct);
}

export function* ProductMiddleware() {
  yield all([call(handleFetchProductSaga)]);
}
