import React from 'react'
import Navbar from "./components/sidenavbar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/login.jsx";
import Contact from "./components/contact.jsx";

const App = () => {
  return (
    
    <BrowserRouter>
    
    
    <div style={{display:"flex"}}>
      <Navbar /> 
      <Routes>

        
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/contact" element = {<Contact/>}/>







      </Routes>



    </div>
    
    
    
    
    </BrowserRouter>
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
 
    
    
  

   
  )
}

export default App




    
  


