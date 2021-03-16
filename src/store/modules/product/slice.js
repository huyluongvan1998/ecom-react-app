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
    fetchProduct: () => { },
    fetchAllProduct: () => { },
    setFetchProduct: (state, action) => {
      const { payload } = action
      state.product = { ...payload, amount: 1 }
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
      if (state.product.amount < state.product.stock) {
        state.product.amount += 1
      }
    },

    decrement: (state) => {
      if (state.product.amount > 0) {
        state.product.amount -= 1
      }
      return
    },
    addToCart: (state, action) => {
      const { payload } = action;
      if (state.cartProducts.length > 0) {
        state.cartProducts.map(p => p.id === payload ? alert('Product Already in cart!') : state.cartProducts = [...state.cartProducts, state.product]);
      } else {
        state.cartProducts = [...state.cartProducts, state.product]

      }
    },

    //Increase and Decrease product amount (specific)

    productIncrement: (state, action) => {
      const { payload } = action
      state.cartProducts.map((prod) =>
        prod.id === payload && prod.amount <= prod.stock ? (prod.amount += 1) : prod.amount
      )
    },

    productDecrement: (state, action) => {
      const { payload } = action
      state.cartProducts.map((prod) => {
        if (prod.id === payload && prod.amount > 0) {
          return (prod.amount -= 1)
        }
        return prod.amount
      })
    },
    subTotal: (state) => {
      state.total = 0
      state.cartProducts.map(
        (product) => (state.total += (product.amount * product.price))
      )
    },
    deleteProduct: (state, action) => {
      const { payload } = action
      console.log('test: ', payload)
      state.cartProducts = state.cartProducts.filter(p => p.id !== payload)
    },
    deleteAll: (state) => {
      state.cartProducts = []
    }
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
  deleteProduct,
  deleteAll
} = ProductSlice.actions

export default ProductSlice.reducer
