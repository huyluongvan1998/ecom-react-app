import axios from "axios"
import { takeLatest, call, all, put } from "redux-saga/effects"
import {
  fetchProduct,
  setFetchProduct,
  fetchAllProduct,
  setAllFetchProduct,
  startLoading,
  endLoading,
} from "./slice"

function* handleFetchAllProduct() {
  try {
    yield put(startLoading())
    const res = yield axios.get(" https://course-api.com/react-store-products")
    yield put(setAllFetchProduct(res.data))
    yield put(endLoading())
  } catch (error) {
    console.error("error: ", error.message)
  }
}

function* handleFetchAllProductSaga() {
  yield takeLatest(fetchAllProduct, handleFetchAllProduct)
}
// Fetch 1 product
function* handleFetchProduct(action) {
  try {
    yield put(startLoading())
    const { payload } = action
    const res = yield axios.get(
      `https://course-api.com/react-store-single-product?id=${payload}`
    )
    yield put(setFetchProduct(res.data))
    yield put(endLoading())
  } catch (error) {
    console.error("error: ", error.message)
  }
}

function* handleFetchProductSaga() {
  yield takeLatest(fetchProduct, handleFetchProduct)
}

export function* ProductMiddleware() {
  yield all([call(handleFetchProductSaga), call(handleFetchAllProductSaga)])
}
