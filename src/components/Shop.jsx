import React from "react";
import { Link, Outlet } from "react-router-dom";
import shopData from "../shopData";

function Shop() {
  return (
    <div className="shop">
      {shopData.map((item) => (
        <Link className="card" to={`/products/${item.id}`} key={item.id}>
          <div className="card__thumbnail">
            <img className="card__img" src={item.imgUrl} alt="" />
          </div>
          <div className="card__info">
            <p className="card__title">{item.title}</p>
            <p className="card__price">${item.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
      <Outlet />
    </div>
  );
}

export default Shop;
