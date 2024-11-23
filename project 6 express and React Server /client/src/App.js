import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
