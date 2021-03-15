import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  fetchProduct,
  setFetchProduct,
  fetchAllProduct,
  setAllFetchProduct,
} from "./slice";

function* handleFetchAllProduct() {
  try {
    const res = yield axios.get(" https://course-api.com/react-store-products");
    yield put(setAllFetchProduct(res.data));
  } catch (error) {
    console.error("error: ", error.message);
  }
}

function* handleFetchAllProductSaga() {
  yield takeLatest(fetchAllProduct, handleFetchAllProduct);
}
// Fetch 1 product
function* handleFetchProduct() {
  try {
    const res = yield axios.get(
      " https://course-api.com/react-store-single-product?id=recZkNf2kwmdBcqd0"
    );
    yield put(setFetchProduct(res.data));
  } catch (error) {
    console.error("error: ", error.message);
  }
}

function* handleFetchProductSaga() {
  yield takeLatest(fetchProduct, handleFetchProduct);
}

export function* ProductMiddleware() {
  yield all([call(handleFetchProductSaga), call(handleFetchAllProductSaga)]);
}
