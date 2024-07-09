import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element= {<About/>} />
        
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

// App is a function based componnet
