import React, { useEffect, useState } from "react";
import logo from "../../resources/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { db, storage } from "../config/firebase";

function ProductBoxSmall(props) {
  const DisabledButton = () => {
    if (props.quantity <= 30) {
      return (
        <button
          disabled
          style={{
            backgroundColor: `#d9ac9c`,
            textDecoration: "line-through",
            color: "#5a3936",
            border: `1px solid #5a3936`,
            boxShadow: `inset 0px 0px 5px 2px #5a3936`,
          }}
          className="buy-btn-sm"
        >
          BRAK W MAGAZYNIE
        </button>
      );
    } else {
      return <button className="buy-btn-sm">Do koszyka</button>;
    }
  };

  return (
    <div className="box" /* key={item.id} */>
      <NavLink to={`/product${props.link}`}>
        <div className="product-photo">
          <img src={props.photo} alt="yarn" />
        </div>
      </NavLink>
      <span className="product-title">
        {props.name} <span>{props.producent}</span>{" "}
        <span>kol. {props.colorNumber}</span>
      </span>
      <span className="product-price">{props.price}zł</span>
      <div className="product-buy">
        <input type="number" />
        <DisabledButton />
      </div>
    </div>
  );
}

export default ProductBoxSmall;
