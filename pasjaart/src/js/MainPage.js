import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import image1 from "../resources/images/k1.jpg";
import image2 from "../resources/images/k2.jpg";
import image3 from "../resources/images/k3.jpg";
import "../styles/App.scss";

function MainPage() {
  return (
    <section className="proposals">
      <div className="container">
        <div className="promotions-proposal">
          <p>Promocje</p>
          <img src={image1} alt="promo" className="promotions-box" />
        </div>
        <div className="bestseller-proposal">
          <p>bestsellery</p>
          <img src={image2} alt="bestsellers" className="bestseller-box" />
        </div>
        <div className="outlet-proposal">
          <p>outlet</p>
          <img src={image3} alt="outlet" className="outlet-box" />
        </div>
      </div>
    </section>
  );
}

export default MainPage;
