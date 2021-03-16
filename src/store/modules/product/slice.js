import { createSlice } from "@reduxjs/toolkit"

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    product: {},
    products: [],
    amount: 1,
    cartAmount: 0,
    cartProducts: [],
    total: 0,
  },
  reducers: {
    // Configs
    fetchProduct: () => {},
    fetchAllProduct: () => {},
    setFetchProduct: (state, action) => {
      const { payload } = action
      state.product = payload
    },
    setAllFetchProduct: (state, action) => {
      const { payload } = action
      state.products = payload
    },

    startLoading: (state) => {
      state.isLoading = true
    },

    endLoading: (state) => {
      state.isLoading = false
    },

    //Cart Function
    increment: (state) => {
      state.amount += 1
    },

    decrement: (state) => {
      if (state.amount > 1) {
        state.amount -= 1
      }
      return
    },
    addToCart: (state) => {
      state.cartProducts = [
        ...state.cartProducts,
        { ...state.product, amount: state.amount },
      ]
      state.cartAmount += state.amount
      state.amount = 1
    },

    //Increase and Decrease product amount (specific)

    productIncrement: (state, action) => {
      const { payload } = action
      state.cartProducts.map((prod) =>
        prod.id === payload ? (prod.amount += 1) : prod.amount
      )
    },

    productDecrement: (state, action) => {
      const { payload } = action
      state.cartProducts.map((prod) => {
        if (prod.id === payload && prod.amount > 1) {
          return (prod.amount -= 1)
        }
        return prod.amount
      })
    },
    subTotal: (state) => {
      state.total = 0
      state.cartProducts.map(
        (product) => (state.total += product.amount * product.price)
      )
    },
  },
  extraReducers: (builder) => {
    //call another slice.
  },
})

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
} = ProductSlice.actions

export default ProductSlice.reducer
