import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  addToCart,
  checkProductId,
  endLoading,
  fetchAllProduct,
  fetchProduct,
  productCartSaga,
  setAllFetchProduct,
  setFetchProduct,
  startLoading,
} from "./slice";

function* handleFetchAllProduct() {
  try {
    yield put(startLoading());
    const res = yield axios.get(" https://course-api.com/react-store-products");
    yield put(setAllFetchProduct(res.data));
    yield put(endLoading());
  } catch (error) {
    console.error("error: ", error.message);
  }
}

function* handleFetchAllProductSaga() {
  yield takeLatest(fetchAllProduct, handleFetchAllProduct);
}
// Fetch 1 product
function* handleFetchProduct(action) {
  try {
    yield put(startLoading());
    const { payload } = action;
    const res = yield axios.get(
      `https://course-api.com/react-store-single-product?id=${payload}`
    );
    yield put(setFetchProduct(res.data));
    yield put(endLoading());
  } catch (error) {
    console.error("error: ", error.message);
  }
}

function* handleFetchProductSaga() {
  yield takeLatest(fetchProduct, handleFetchProduct);
}

function* cartProductHandle({ payload }) {
  yield put(checkProductId(payload));
  yield put(addToCart(payload));
}

function* cartProductHandleSaga() {
  yield takeLatest(productCartSaga, cartProductHandle);
}

export function* ProductMiddleware() {
  yield all([
    call(handleFetchProductSaga),
    call(handleFetchAllProductSaga),
    call(cartProductHandleSaga),
  ]);
}
