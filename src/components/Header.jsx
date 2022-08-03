import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header({ cart }) {
  function getAllQuantity() {
    return cart
      .map((item) => item.quantity)
      .reduce((prev, next) => prev + next);
  }

  return (
    <div className="header ">
      <Link to="/">
        <h1 className="header__logo">RaGf</h1>
      </Link>
      <Link to="/cart">
        <div className="header__icon sidemenu__cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
          {cart.length > 0 ? (
            <div className="notification">{getAllQuantity()}</div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <Link to="/products">
        <div className="header__icon">
          <i className="fa-solid fa-store"></i>
        </div>
      </Link>

      <Link to="/contact">
        <div className="header__icon">
          <i className="fa-solid fa-envelope"></i>
        </div>
      </Link>
    </div>
  );
}

export default Header;
