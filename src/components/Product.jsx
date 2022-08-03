import React from "react";
import { useParams } from "react-router-dom";
import shopData from "../shopData";
import NotificationAdded from "./NotificationAdded";

function Product({ cart, setCart, handleQtyChange }) {
  let params = useParams();
  let item = getProductDetail();

  function getProductDetail() {
    return shopData.find((item) => item.id == params.productID);
  }

  function handleAddToCart() {
    if (cart.some((cartItem) => cartItem.id == item.id)) {
      setCart((prevState) => {
        return prevState.map((cartItem) => {
          return cartItem.id == item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem;
        });
      });
      return;
    }
    setCart((prevState) => {
      return [...prevState, { ...item, quantity: 1 }];
    });
  }

  return (
    <div className="container product container--py-m">
      <div className="product__image">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="product__info">
        <p>ID: {params.productID}</p>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <h2>${item.price.toFixed(2)}</h2>

        <button
          className="button button--add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
