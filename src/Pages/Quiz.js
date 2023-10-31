import { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import Loader from "../components/Loader";

const intitialState = {
  questions: [],
  index: 0,
  answer: null,
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    default:
      throw new Error("Action Unknown");
  }
}
function Quiz() {
  const [{ questions, index, status }, dispatch] = useReducer(
    reducer,
    intitialState
  );

  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple"
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data.results });
    }
    fetchQuestion();
  }, []);
  return (
    <div>
      <Navbar />
      {status === "loading" && <Loader />}
      {status === "ready" && <Question question={questions[index]} />}
    </div>
  );
}

export default Quiz;
