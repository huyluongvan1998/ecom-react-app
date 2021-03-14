import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    product: [],
  },
  reducers: {
    // Configs
    fetchProduct: () => {},

    setFetchProduct: (state, action) => {
        const { payload } = action
        state.product = payload;
        console.log('state: ', state.product);
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
  setFetchProduct,
  startLoading,
  endLoading
} = ProductSlice.actions;

export default ProductSlice.reducer;
