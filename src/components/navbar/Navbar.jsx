import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Menu
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/burger">Burger</Link>
            <Link to="/pizza">Pizza</Link>
            <Link to="/biryani">Biryani</Link>
          </div>
        </div>
        <a href="#">About</a>
      </div>
    </>
  );
};

export default Navbar;
