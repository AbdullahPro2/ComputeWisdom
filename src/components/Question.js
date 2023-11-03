import { useEffect, useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function decodeHTMLEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function Question({ question, dispatch, index, questions }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [shuffleAnswers, setShuffledAnswers] = useState([]);
  useEffect(() => {
    let answersArray = [...question.incorrect_answers, question.correct_answer];
    setShuffledAnswers(shuffleArray(answersArray));
    setIsButtonDisabled(false);
  }, [question]);
  const questionDecoded = decodeHTMLEntities(question.question);
  const handleButtonClick = (e) => {
    console.log("click", e.target.value);
    dispatch({ type: "answerd", payload: e.target.value });
    setIsButtonDisabled(true);
  };

  function handleNext() {
    if (index < questions.length - 1) {
      dispatch({ type: "next" });
      setIsButtonDisabled(false);
    } else {
      dispatch({ type: "finish" });
    }
  }
  const abc = ["A", "B", "C", "D"];
  return (
    <div className="question-container">
      <p className="question">{questionDecoded}</p>
      {shuffleAnswers.map((ans, index) => {
        return (
          <button
            key={ans}
            onClick={(e) => handleButtonClick(e, index)}
            disabled={isButtonDisabled}
            value={ans}
            className={`answer ${
              shuffleAnswers[index] === question.correct_answer &&
              isButtonDisabled
                ? "correct-answer"
                : shuffleAnswers[index] !== question.correct_answer &&
                  isButtonDisabled
                ? "incorrect-answer"
                : ""
            }`}
          >
            {abc[index]}) {ans}
          </button>
        );
      })}
      <button
        onClick={handleNext}
        disabled={!isButtonDisabled}
        className="next-btn"
      >
        {index < questions.length - 1 ? "NEXT 👉" : "Finish 🏁"}
      </button>
    </div>
  );
}

export default Question;
