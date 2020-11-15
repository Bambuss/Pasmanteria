import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import image1 from "../resources/images/k1.jpg";
import image2 from "../resources/images/k2.jpg";
import image3 from "../resources/images/k3.jpg";
import "../styles/App.scss";
import ProductBoxSmall from "./Elements/productBoxSmall";

function MainPage() {
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
            <ProductBoxSmall />
            <ProductBoxSmall />
            <ProductBoxSmall />
            <ProductBoxSmall />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
