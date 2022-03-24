import React from "react";
import image from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img className="image" src={image} alt="" />
      <div className="order">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
