import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, setCart, handleQtyChange, handleRemoveFromCart }) {
  function getTotalPrice() {
    return cart
      .map((cart) => cart.quantity * cart.price)
      .reduce((prev, next) => prev + next);
  }

  return (
    <div className="container container--py-m">
      <div className="cart">
        {cart.length >= 1 ? (
          <div>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  handleQtyChange={handleQtyChange}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <div className="cart__total">
              <h1>Total: ${getTotalPrice().toFixed(2)} </h1>
              <button className="button button--solid-purple">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <div className="cart__empty-icon">
              <i className="fa-solid fa-cart-plus"></i>
            </div>
            <h1>Cart is Empty</h1>
            <p>Please browse the store or catalog, and then add it to cart.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
