// NavBar.js
import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
      </div>
    </div>
  );
};

export default NavBar;




    