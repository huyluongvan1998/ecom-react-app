import { createSelector } from "reselect";

const getProduct = (state) => state.product.product;
export const ProductSelector = createSelector(getProduct, p => p);