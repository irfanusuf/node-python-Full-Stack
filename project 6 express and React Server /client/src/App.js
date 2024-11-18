import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
 


  return (
    <>
      <BrowserRouter>
 
          <Navbar/>
    
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog/>} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
