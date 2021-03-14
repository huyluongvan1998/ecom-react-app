import React from 'react';
import './App.css';
import Header from "./pages/layout/header/header";
import GlobalStyle from './global.style';
import Footer from "./pages/layout/footer/footer";
function App() {
  return (
    <div className="App">
      <GlobalStyle >
        <Header />
        <Footer />
      </GlobalStyle>
    </div>
  );
}

export default App;
