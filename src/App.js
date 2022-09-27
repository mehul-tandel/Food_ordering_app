import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartClickedHandler = () => setCartClicked(true);
  const hideCartHandler = () => setCartClicked(false);

  return (
    <CartProvider>
      {cartClicked && <Cart onClose={hideCartHandler} />}
      <Header onCartClicked={cartClickedHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
