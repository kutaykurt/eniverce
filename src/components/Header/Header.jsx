import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-top-section">
        <ul className="header-top-section-list">
          <li className="list-item">Spiele</li>
          <li className="list-item">PS5</li>
          <li className="list-item">PS4</li>
          <li className="list-item">Services</li>
          <li className="list-item">Zubehör</li>
          <li className="list-item">News</li>
          <li className="list-item">Shop</li>
          <li className="list-item">Support</li>
        </ul>
      </div>
      <div className="header-body">

        <div className="header-left-section">
          <h3 className="header-titel"><span className="header-titel-first-part">Play</span><span className="header-titel-second-part">Vines</span></h3>
        </div>

        <div className="header-mid-section">
          <ul className="header-mid-section-list">
            <li className="list-item">Aktuelles</li>
            <li className="list-item">Angebote</li>
            <li className="list-item">Abonnements</li>
            <li className="list-item">Durchsuchen</li>
          </ul>
        </div>
        <div className="header-right-section"></div>
      </div>
    </div>
  );
};

export default Header;
