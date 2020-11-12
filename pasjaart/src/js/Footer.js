import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import "../styles/App.scss";

function Footer() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleClick = () => {
    setToggleMenu((prevState) => !prevState);
  };
  const show = toggleMenu ? "none" : "flex";
  const rotate = toggleMenu ? "none" : "rotate(180deg)";

  const [toggleMenu1, setToggleMenu1] = useState(true);

  const handleClick1 = () => {
    setToggleMenu1((prevState) => !prevState);
  };
  const show1 = toggleMenu1 ? "none" : "flex";
  const rotate1 = toggleMenu1 ? "none" : "rotate(180deg)";

  const [toggleMenu2, setToggleMenu2] = useState(true);

  const handleClick2 = () => {
    setToggleMenu2((prevState) => !prevState);
  };
  const show2 = toggleMenu2 ? "none" : "flex";
  const rotate2 = toggleMenu2 ? "none" : "rotate(180deg)";

  const [toggleMenu3, setToggleMenu3] = useState(true);

  const handleClick3 = () => {
    setToggleMenu3((prevState) => !prevState);
  };
  const show3 = toggleMenu3 ? "none" : "flex";
  const rotate3 = toggleMenu3 ? "none" : "rotate(180deg)";

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-layer">
            <span>INFORMACJE</span>
            <div
              className="footer-btn"
              onClick={handleClick}
              style={{
                transform: rotate,
              }}
            >
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </div>
          </div>
          <ul
            style={{
              display: show,
            }}
          >
            <li>
              <NavLink to="/regulamin" exact>
                <span>Regulamin</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/politicy">
                <span>Polityka Prywatności</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-about">
          <div className="footer-layer">
            <span>O FIRMIE</span>
            <div
              className="footer-btn"
              onClick={handleClick1}
              style={{
                transform: rotate1,
              }}
            >
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </div>
          </div>
          <ul
            style={{
              display: show1,
            }}
          >
            <li>
              <NavLink to="/contact">
                <span>Kontakt</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-shipping">
          <div className="footer-layer">
            <span>DOSTAWA</span>
            <div
              className="footer-btn"
              onClick={handleClick2}
              style={{
                transform: rotate2,
              }}
            >
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </div>
          </div>

          <ul
            style={{
              display: show2,
            }}
          >
            <li>
              <NavLink to="/shipping-costs">
                <span>Koszty dostawy</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/paying">
                <span>Formy płatności</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/refunding">
                <span>Zwroty</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reclamations">
                <span>Reklamacje</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <div className="footer-layer">
            <span>POMOC</span>{" "}
            <div
              className="footer-btn"
              onClick={handleClick3}
              style={{
                transform: rotate3,
              }}
            >
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </div>
          </div>
          <ul
            style={{
              display: show3,
            }}
          >
            <li>
              <NavLink to="/search" exact>
                <span>Szukaj</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
