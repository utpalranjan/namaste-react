import React from "react";
import { LOGO_URL } from "../utils/constant";

 const Header = () => {
    return (
      <div className="header container">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li className="home">Home</li>
            <li className="about">About Us </li>
            <li className="contact">Contact Us </li>
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

