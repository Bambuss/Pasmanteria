import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
// import logo from "../resources/images/logo_kwiatek.jpg";
import "../styles/App.scss";

function Header() {
  const activeStyle = {
    color: " #adc5d9",
    backgroundColor: "#32243d",
    textShadow: "none",
  };
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/skleppasjaart.appspot.com/o/Testy%2Flogo_kwiatek-removebg-preview.png?alt=media&token=1b040f0f-63d4-4c0f-9388-cb50b7bc7d90";
  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="navigation">
            <div className="user">
              <NavLink to="/user">
                <FontAwesomeIcon icon={["far", "user"]} />
              </NavLink>
            </div>
            <div className="basket ">
              <NavLink to="/basket">
                <FontAwesomeIcon icon={["fas", "shopping-basket"]} />
              </NavLink>
            </div>
            <div className="centralize">
              <NavLink to="/" exact>
                <img src={logo} alt="logo" className="logo" />
              </NavLink>
            </div>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <div className="search">
              <NavLink to="/search" exact>
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  // className="search-btn"
                />
              </NavLink>
            </div>
            <ul className="menu">
              <li>
                <NavLink to="/" exact activeStyle={activeStyle}>
                  <FontAwesomeIcon icon={["fas", "home"]} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/Włóczki" activeStyle={activeStyle}>
                  Włóczki
                </NavLink>
              </li>
              <li>
                <NavLink to="/Tkaniny" activeStyle={activeStyle}>
                  Tkaniny
                </NavLink>
              </li>
              <li>
                <NavLink to="/Kordonki_i_nici" activeStyle={activeStyle}>
                  Kordonki i nici
                </NavLink>
              </li>
              <li>
                <NavLink to="/Pasmanteria" activeStyle={activeStyle}>
                  pasmanteria
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
