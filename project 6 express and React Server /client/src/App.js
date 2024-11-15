import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import { useState } from "react";

function App() {
 

  const [loading , setLoading] = useState(false)


  return (
    <>
      <BrowserRouter>


        <Navbar loading = {loading} setLoading = {setLoading}/>

        <div className="main">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog loading = {loading} />} />
        </Routes>

        </div>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
