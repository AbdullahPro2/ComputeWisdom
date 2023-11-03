import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Quiz from "./Pages/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  document.title = "Computer Wisdom";
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
