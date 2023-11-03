import questionMark from "../imgs/questionMark.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="quiz-info">
          <h1 className="quiz-info-text">
            Dive into Our Latest Quiz to Test Your Expertise
          </h1>
          <h2 className="quiz-info-text">Put Your Knowledge to the Test.</h2>
          <button className="quiz-info-text">
            <Link to="/quiz">Start Quiz &#x1F449;</Link>
          </button>
        </div>
        <div className="question-mark">
          <img src={questionMark} alt="questionMark PNG" />
        </div>
      </div>
    </header>
  );
}

export default Header;
