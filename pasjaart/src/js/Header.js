import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import logo from "../resources/images/logo_kwiatek.jpg";
import "../styles/App.scss";

function Header() {
  const activeStyle = {
    color: " #adc5d9",
    backgroundColor: "#32243d",
    textShadow: "none",
  };

  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="navigation">
            {/* <div className="user">
              <NavLink to="/" exact>
                <FontAwesomeIcon icon={["far", "user"]} />
              </NavLink>
            </div>
            <div className="basket">
              <NavLink to="/" exact>
                <FontAwesomeIcon icon={["fas", "shopping-basket"]} />
              </NavLink>
            </div> */}

            <NavLink to="/" exact>
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
            {/* <div className="search">
              <NavLink to="/" exact>
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  className="search-btn"
                />
              </NavLink>
            </div> */}

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>

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
