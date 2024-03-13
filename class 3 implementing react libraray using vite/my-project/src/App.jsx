import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SideNavbar from "./components/SideNavbar";
import PageNotFound from "./components/PageNotFound";
import ItemCard from  "./components/ItemCard"

const App = () => {
  return (
    <BrowserRouter>
      <div style={{display:"flex"}}>
        <SideNavbar />
        <Routes>
          <Route path="/items" element={<Home />} />
          <Route path="/items/:id" element={<ItemCard/>} />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
