import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    product: {},
    products: [],
  },
  reducers: {
    // Configs
    fetchProduct: () => {},
    fetchAllProduct: () => {},
    setFetchProduct: (state, action) => {
      const { payload } = action;
      state.product = payload;
    },
    setAllFetchProduct: (state, action) => {
      const { payload } = action;
      state.products = payload;
    },

    startLoading: (state) => {
      state.isLoading = true;
    },

    endLoading: (state) => {
      state.isLoading = false;
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
} = ProductSlice.actions;

export default ProductSlice.reducer;
