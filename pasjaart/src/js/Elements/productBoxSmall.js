import React from "react";
import logo from "../../resources/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { db } from "../config/firebase";

function ProductBoxSmall(props) {
  //   const productPhoto = ;
  const productTitle = `Włóczka pierwsza kol.000`;
  const productPrice = `10.90zł`;
  //   const productInfo = db.products.wools;
  //   console.log(productInfo);

  return (
    <div className="box1" /* key={item.id} */>
      <NavLink to="/product1">
        <div className="product-photo"></div>
      </NavLink>
      <span className="product-title">{productTitle}</span>
      <span className="product-price">{productPrice}</span>
      <div className="product-buy">
        <input type="number" />
        <button className="buy-btn-sm">Do koszyka!</button>
      </div>
    </div>
  );
}

export default ProductBoxSmall;
