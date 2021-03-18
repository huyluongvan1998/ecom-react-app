import { createSlice } from "@reduxjs/toolkit";
import history from "utils/history";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    product: {},
    products: [],
    cartAmount: 0,
    cartProducts: JSON.parse(window.localStorage.getItem("products")) || [],
    total: 0,
    isShow: false,
    isCheck: false,
  },
  reducers: {
    // Configs
    fetchProduct: () => {},
    fetchAllProduct: () => {},
    setFetchProduct: (state, action) => {
      const { payload } = action;
      state.product = { ...payload, amount: 1 };
    },
    setAllFetchProduct: (state, action) => {
      const { payload } = action;
      state.products = payload;
    },
    setCartAmount: (state) => {
      let sum = 0;
      state.cartProducts.map((p) => (sum += p.amount));
      state.cartAmount = sum;
    },

    toggleShow: (state) => {
      state.isShow = !state.isShow;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },

    endLoading: (state) => {
      state.isLoading = false;
    },

    //Cart Function
    productCartSaga: () => {},
    checkProductId: (state, { payload }) => {
      console.log("payload ", payload);
      if (state.cartProducts.filter((p) => p.id === payload.id).length > 0) {
        state.isCheck = true;
        state.isShow = true;
      } else {
        state.isCheck = false;
      }
    },

    addToCart: (state, { payload }) => {
      let quantity = 0;
      if (state.isCheck) {
        state.cartProducts.map((p) =>
          p.id === payload.id
            ? (quantity = payload.amount + p.amount)
            : quantity
        );
        if (quantity > payload.stock) {
          history.push("/cart");
        } else {
          state.cartProducts.map((p) =>
            p.id === payload.id && p.amount + payload.amount < p.stock
              ? (p.amount += payload.amount)
              : (p.amount = p.stock)
          );
          return history.push("/cart");
        }
      } else {
        state.cartProducts.push(payload);
        history.push("/cart");
      }
    },

    //Increase and Decrease product amount (specific)

    productIncrement: (state, action) => {
      const { payload } = action;
      state.cartProducts.map((prod) => {
        if (prod.id === payload && prod.amount < prod.stock) {
          state.product && state.product.amount++;
          return prod.amount++;
        } else {
          return prod.amount;
        }
      });
    },

    productDecrement: (state, action) => {
      const { payload } = action;
      state.cartProducts.map((prod) => {
        if (prod.id === payload && prod.amount > 0) {
          state.product && state.product.amount--;
          return prod.amount--;
        } else {
          return prod.amount;
        }
      });
    },
    subTotal: (state) => {
      state.total = 0;
      state.cartProducts.map(
        (product) => (state.total += product.amount * product.price)
      );
    },
    deleteProduct: (state, action) => {
      const { payload } = action;
      state.cartProducts = state.cartProducts.filter((p) => p.id !== payload);
    },
    deleteAll: (state) => {
      state.cartProducts = [];
    },
  },
  extraReducers: (builder) => {
    //call another slice.
  },
});

export const {
  fetchProduct,
  fetchAllProduct,
  setFetchProduct,
  startLoading,
  endLoading,
  setAllFetchProduct,
  increment,
  decrement,
  addToCart,
  productIncrement,
  productDecrement,
  subTotal,
  deleteProduct,
  deleteAll,
  setCartAmount,
  toggleShow,
  checkProductId,
  productCartSaga,
} = ProductSlice.actions;

export default ProductSlice.reducer;
