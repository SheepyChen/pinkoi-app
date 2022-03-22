import { useState } from "react";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
import Home from "../src/components/ProductPage/Home";
import Cart from "../src/components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";
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
      <Home />
      <Footer />
    </CartProvider>
  );
}

export default App;
