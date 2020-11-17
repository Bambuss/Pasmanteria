import React, { useEffect, useState } from "react";
import logo from "../../resources/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { db, storage } from "../config/firebase";

function ProductBoxSmall(props) {
  //   const productPhoto = ;

  // const [products, setProducts] = useState([]);
  // useEffect(() => {

  //   db.collection("products")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //         setProducts(doc.data())
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting documents: ", error);
  //     });
  // }, []);

  // const productTitle = `Włóczka pierwsza kol.000`;
  // const productPrice = `10.90zł`;
  //   const productInfo = db.products.wools;
  //   console.log(productInfo);

  return (
    <div className="box" /* key={item.id} */>
      <NavLink to={`/product${props.link}`}>
        <div className="product-photo">
          <img src={props.photo} alt="yarn" />
        </div>
      </NavLink>
      <span className="product-title">
        {props.name} <span>kol. {props.colorNumber}</span>
      </span>
      <span className="product-price">{props.price}zł</span>
      <div className="product-buy">
        <input type="number" />
        <button className="buy-btn-sm">Do koszyka!</button>
      </div>
    </div>
  );
}

export default ProductBoxSmall;
