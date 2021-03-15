import { createSelector } from "reselect";

const getProduct = (state) => state.product.product;
export const ProductSelector = createSelector(getProduct, (p) => p);

const getAllProducts = (state) => state.product.products;
export const ProductsSelector = createSelector(getAllProducts, (p) => p);
