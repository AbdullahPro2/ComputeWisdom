import logo from "../imgs/logo.png";
import questionMark from "../imgs/questionMark.png";
import CrossIcon from "../imgs/crossIcon.svg";
import MenuIcon from "../imgs/menuIcon.svg";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className={`navbar-list ${isActive ? "active" : " "}`}>
          <li>Computer</li>
          <li>Science & Nature</li>
          <li>General Knowledge</li>
          <li>History</li>
          <li>About us</li>
          <li>Contact</li>
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
      <div className="header-content">
        <div className="quiz-info">
          <h1 className="quiz-info-text">
            Dive into Our Latest Quiz to Test Your Expertise
          </h1>
          <h2 className="quiz-info-text">Put Your Knowledge to the Test.</h2>
          <button className="quiz-info-text">Start Quiz &#x1F449;</button>
        </div>
        <div className="question-mark">
          <img src={questionMark} alt="questionMark PNG" />
        </div>
      </div>
    </header>
  );
}

export default Header;
