import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
const Header = ({ cart }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <span className="cartcount">{cart.length}</span>
              View Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
