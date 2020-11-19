import React, { useState } from "react";

function LogIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <div className="login-box">
            <h2 className="hello">
              Aloha! <span>Zaloguj się lub stwórz nowe konto</span>
            </h2>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="logButtons">
              <button className="crt-acc-btn">Zarejestruj się</button>
              <button className="login-btn">Zaloguj się</button>
            </div>
          </div>
        </div>
        <div className="margin"></div>
      </div>
    </section>
  );
}

export default LogIn;
