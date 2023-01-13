import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <div className="dropdown">
          <button className="dropbtn">Menu
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Burger</a>
            <a href="#">Pizza</a>
            <a href="#">Biriyani</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
