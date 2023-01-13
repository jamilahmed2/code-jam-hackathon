import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>
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
        <a href="#">About</a>
      </div>
    </>
  );
};

export default Navbar;
