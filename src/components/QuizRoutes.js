import { Routes, Route } from "react-router-dom";
import Quiz from "../Pages/Quiz";

function QuizRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/quiz/computer" element={<Quiz />} />
        <Route path="/quiz/scienceNature" element={<Quiz />} />
        <Route path="/quiz/generalKnowledge" element={<Quiz />} />
        <Route path="/quiz/history" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default QuizRoutes;
