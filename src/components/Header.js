
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

 const Header = () => {

  const [loginBtn, setLoginBtn] = useState("Login")

  const changeButton = () => {
    loginBtn === "Login" ? setLoginBtn("Logout"): setLoginBtn("Login")
  }
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
            <button className="login-btn" onClick={changeButton}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

