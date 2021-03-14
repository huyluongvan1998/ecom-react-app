import React from "react";
import "./App.css";
import Header from "./pages/layout/header/header";
import GlobalStyle from "./global.style";
import Footer from "./pages/layout/footer/footer";
import Home from "./pages/Home/index";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./pages/products";

function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <Header />
        <main>
          
          <Switch>
            <Route path='/Home'  component={Home} />
            <Route path='/About'  component={Home} />
            <Route path='/Product'  component={ProductPage}/>
            <Route path='/' component={Home} />
          </Switch>
        </main>
        <Footer />
      </GlobalStyle>
    </div>
  );
}

export default App;
