import { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

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
  const { category } = useParams();
  const categoryValue =
    category === "generalKnowledge"
      ? 9
      : category === "history"
      ? 23
      : category === "computer"
      ? 18
      : category === "scienceNature"
      ? 17
      : "";

  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=15&category=${categoryValue}&difficulty=medium&type=multiple`
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data.results });
    }
    fetchQuestion();
  }, [categoryValue]);

  return (
    <div>
      <Navbar />
      {status === "loading" && <Loader />}
      {status === "ready" && <Question question={questions[index]} />}
    </div>
  );
}

export default Quiz;
