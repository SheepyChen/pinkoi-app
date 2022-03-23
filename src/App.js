import { useState } from "react";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
import Home from "../src/components/ProductPage/Home";
import LikePage from "../src/components/LikePage/LikePage";
import Cart from "../src/components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";
import { Routes, Route } from "react-router-dom";
import "../src/styles/style.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<LikePage />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
