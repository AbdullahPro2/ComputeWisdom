import logo from "../imgs/logo.png";
import CrossIcon from "../imgs/crossIcon.svg";
import MenuIcon from "../imgs/menuIcon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className={`navbar-list ${isActive ? "active" : " "}`}>
        <li>Computer</li>
        <li>Science & Nature</li>
        <li>General Knowledge</li>
        <li>History</li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="btn">
        {isActive === false && (
          <img
            src={MenuIcon}
            alt="MenuIcon"
            width="38"
            height="38"
            onClick={() => setIsActive(true)}
          />
        )}
        {isActive && (
          <img
            src={CrossIcon}
            alt="crossIcon"
            width="38"
            height="38"
            className="cross-icon"
            onClick={() => setIsActive(false)}
          />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
