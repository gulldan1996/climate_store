import React from "react";
import logo from "../../img/climate_store.svg";
import telegram from "../../img/telegram.svg";
import "./Header.scss";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="top container">
        <Link to="/" className="top_logo">
          <img src={logo} alt="climate store" />
        </Link>
        <div className="top_phone">
          <p className="name">Телефон:</p>
          <span className="number">+38 097 254 49 00</span>
          <a href="https://t.me/climat_ua" className="phone_telegram">
            <img
              src={telegram}
              alt="phone_telegram"
              className="phone_telegram-img"
            />
          </a>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
