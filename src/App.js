import GlobalStyle from "global.style";
import CartPage from "pages/cart";
import Home from "pages/Home";
import Footer from "pages/layout/footer/footer";
import Header from "pages/layout/header/header";
import ProductDetail from "pages/productDetails";
import ProductPage from "pages/products";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
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
  );
};

export default App;
