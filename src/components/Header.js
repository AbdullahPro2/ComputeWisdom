import logo from "../imgs/logo.png";
import questionMark from "../imgs/questionMark.png";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-list">
          ||<li>Computer</li>||
          <li>Science & Nature</li>||
          <li>General Knowledge</li>||
          <li>History</li>||
          <li>About us</li>||
          <li>Contact</li>||
        </ul>
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
