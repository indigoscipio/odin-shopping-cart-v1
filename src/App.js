import React from "react";
import Product from "./components/Product";
import LandingPage from "./components/LandingPage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [cart, setCart] = React.useState([]);

  function handleQtyChange(id, d) {
    setCart((prevState) => {
      return prevState.flatMap((cartItem) => {
        if (cartItem.id == id) {
          if (cartItem.quantity + d < 1) {
            return [];
          }
          return [
            {
              ...cartItem,
              quantity: cartItem.quantity + d,
            },
          ];
        }
        return [cartItem];
      });
    });
  }

  function handleRemoveFromCart(id) {
    setCart((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="cart"
            element={
              <Cart
                handleRemoveFromCart={handleRemoveFromCart}
                cart={cart}
                setCart={setCart}
                handleQtyChange={handleQtyChange}
              />
            }
          />
          <Route path="products" element={<Shop />} />
          <Route
            path="products/:productID"
            element={
              <Product
                cart={cart}
                setCart={setCart}
                handleQtyChange={handleQtyChange}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
