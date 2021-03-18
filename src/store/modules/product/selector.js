import { createSelector } from "reselect";

const getProduct = (state) => state.product.product;
export const ProductSelector = createSelector(getProduct, (p) => p);

const getAllProducts = (state) => state.product.products;
export const ProductsSelector = createSelector(getAllProducts, (p) => p);

const getLoading = (state) => state.product.isLoading;
export const LoadingSelector = createSelector(getLoading, (p) => p);

const getAmount = (state) => state.product.product.amount;
export const AmountSelector = createSelector(getAmount, (p) => p);

const getCartProduct = (state) => state.product.cartProducts;
export const CartProductSelector = createSelector(getCartProduct, (p) => p);

const getCartAmount = (state) => state.product.cartAmount;
export const CartAmountSelector = createSelector(getCartAmount, (p) => p);

const getTotal = (state) => state.product.total;
export const TotalSelector = createSelector(getTotal, (p) => p);

const getIsShow = (state) => state.product.isShow;
export const IsShowSelector = createSelector(getIsShow, (p) => p);

const getIsCheck = (state) => state.product.isCheck;
export const IsCheckSelector = createSelector(getIsCheck, (p) => p);
