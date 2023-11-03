import { useEffect, useReducer } from "react";
import Question from "../components/Question";
import Loader from "../components/Loader";
import { NavLink, useParams } from "react-router-dom";
import Progres from "../components/Progres";

const intitialState = {
  questions: [],
  index: 0,
  answer: null,
  status: "loading",
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        index: 0,
        points: 0,
        answer: null,
        questions: action.payload,
        status: "ready",
      };
    case "answerd":
      return {
        ...state,
        answer: state.answer + 1,
        points:
          action.payload === state.questions[state.index].correct_answer
            ? state.points + 10
            : state.points + 0,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: 0,
      };
    case "finish":
      return {
        ...state,
        status: "finish",
      };
    case "restart":
      return {
        ...state,
        questions: [],
        index: 0,
        answer: null,
        points: 0,
      };

    default:
      throw new Error("Action Unknown");
  }
}
function Quiz() {
  const [{ questions, index, status, answer, points }, dispatch] = useReducer(
    reducer,
    intitialState
  );
  const { category } = useParams();
  console.log(category);
  const categoryValue =
    category === "generalKnowledge"
      ? 9
      : category === "history"
      ? 23
      : category === "computer"
      ? 18
      : category === "scienceNature"
      ? 17
      : 23;

  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=3&category=${categoryValue}&difficulty=medium&type=multiple`
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data.results });
    }
    fetchQuestion();
  }, [categoryValue]);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <>
          <Progres numQuestions={questions} answer={answer} index={index} />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            index={index}
            questions={questions}
          />
        </>
      )}
      {status === "finish" && (
        <div className="result">
          <p>
            You Scored {points} / {questions.length * 10}
          </p>
          <span>{Math.trunc((points / (questions.length * 10)) * 100)}%</span>
          <NavLink to="/">
            <button
              className="finish-btn"
              onClick={() => dispatch({ type: "restart" })}
            >
              {" "}
              Restart &#8634;
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Quiz;
