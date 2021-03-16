import React from "react"
import "./App.css"
import Header from "./pages/layout/header/header"
import GlobalStyle from "./global.style"
import Footer from "./pages/layout/footer/footer"
import Home from "./pages/Home/index"
import { Switch, Route } from "react-router-dom"
import ProductPage from "./pages/products"
import ProductDetail from "./pages/productDetails"
import CartPage from "./pages/cart"

function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <Header />
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/product/details/:id" component={ProductDetail} />
            <Route path="/cart" component={CartPage} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </GlobalStyle>
    </div>
  )
}

export default App
