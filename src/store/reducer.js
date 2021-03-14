import { combineReducers } from '@reduxjs/toolkit';
import ProductSlice from './modules/product/slice';


const rootReducer = () =>
  combineReducers({
    product: ProductSlice,
  });

export default rootReducer();
