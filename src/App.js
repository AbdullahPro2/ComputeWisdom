import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="quiz/:category" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
