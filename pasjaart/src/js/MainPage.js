import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import image1 from "../resources/images/k1.jpg";
import image2 from "../resources/images/k2.jpg";
import image3 from "../resources/images/k3.jpg";
import "../styles/App.scss";
import ProductBoxSmall from "./Elements/productBoxSmall";
import { db, storage } from "./config/firebase";

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .limit(7)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setProducts((prevState) => [...prevState, { ...data, id }]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <section className="proposals">
      <div className="container">
        <div className="promotions-proposal">
          <NavLink to="/promotions">
            <p>Promocje</p>
            <img src={image1} alt="promo" className="promotions-box" />
          </NavLink>
        </div>

        <div className="bestseller-proposal">
          <NavLink to="/bestseller">
            <p>bestsellery</p>
            <img src={image2} alt="bestsellers" className="bestseller-box" />
          </NavLink>
        </div>
        <div className="outlet-proposal">
          <NavLink to="/outlet">
            <p>outlet</p>
            <img src={image3} alt="outlet" className="outlet-box" />
          </NavLink>
        </div>
        <div className="new-added">
          <p>Nowo dodane</p>
          <div className="new-added-box">
            {products.map((product) => (
              <ProductBoxSmall
                key={product.id}
                link={product.id}
                photo={product.photos[0]}
                name={product.name}
                colorNumber={product.catalogNumber}
                price={product.price}
                producent={product.producent}
                quantity={product.quantity}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
