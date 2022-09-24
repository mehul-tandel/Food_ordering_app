import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartClickedHandler = () => setCartClicked(true);
  const hideCartHandler = () => setCartClicked(false);

  return (
    <React.Fragment>
      {cartClicked && <Cart onClose={hideCartHandler} />}
      <Header onCartClicked={cartClickedHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
