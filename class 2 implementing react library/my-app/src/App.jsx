import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SideNavbar from "./components/SideNavbar";
import PageNotFound from "./components/PageNotFound";
import ItemCard from  "./components/ItemCard"
import Blogs from "./components/Blogs";
import Landingpage from "./components/Landingpage";

const App = () => {


  const email = localStorage.getItem("myemail")
  

  return (
    <BrowserRouter>
      <div style={{display:"flex"}}>
        <SideNavbar />
        <Routes>
          
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element= {<Landingpage/>}  />
          <Route path="/items" element= {<Home/>}  />

          <Route path="/items/:id" element={<ItemCard/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs/>} />

          

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
