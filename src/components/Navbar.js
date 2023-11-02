import logo from "../imgs/logo.png";
import CrossIcon from "../imgs/crossIcon.svg";
import MenuIcon from "../imgs/menuIcon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul
        className={`navbar-list ${isActive ? "nav-active" : " "}`}
        onClick={() => setIsActive(false)}
      >
        <li>
          <NavLink to="/quiz/computer" reloadDocument>
            Computer
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz/scienceNature" reloadDocument>
            Science & Nature
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz/generalKnowledge" reloadDocument>
            General Knowledge
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz/history" reloadDocument>
            History
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
