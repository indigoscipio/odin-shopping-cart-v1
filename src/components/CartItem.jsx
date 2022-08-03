import React from "react";

function CartItem({ item, handleQtyChange, handleRemoveFromCart }) {
  return (
    <div className="cart__item">
      <div className="item__image">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="item__info">
        <p className="item__title">{item.title}</p>
        <p className="item__desc">{item.description}</p>
        <p className="item__price">${item.price.toFixed(2)}</p>
      </div>
      <div className="item__qty-controls">
        <button
          onClick={() => handleQtyChange(item.id, -1)}
          className="button button--qty-change"
        >
          -
        </button>
        <p className="item__quantity">{item.quantity}</p>
        <button
          onClick={() => handleQtyChange(item.id, 1)}
          className="button button--qty-change"
        >
          +
        </button>
      </div>
      <div className="item__remove">
        <button
          className="button button--solid-purple"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
