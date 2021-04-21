import React from "react";
import "./Header.scss";
import logo from "../../collection.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="collection-pics" />
      <div>
        <span>Store Your Pics at</span>
        <span className="hero-text">PIXO</span>
      </div>
    </div>
  );
}

export default Header;
