import React, { useState } from "react";
import "./SideNavbar.scss";
import { Link } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";

const SideNavbar = () => {
  const [displaylogin, setdisplayLogin] = useState(false);
  const [displayContact , setDisplayContact] = useState (false)

  const handleLogin = () => {
    setdisplayLogin(true); 
  };

const handleContactPage = ()=>{
  setDisplayContact(true)
}




  return (
    <>
      <div className="side-bar">
        <div className="brand-name">
          <h3> Cognitive</h3>
          <h2>Learning</h2>
        </div>

        <ul>
          <li onClick={handleLogin}> Login</li>
          <hr />
          <li>
            <Link to="/about"> About</Link>
          </li>
          <hr />


          <li onClick={handleContactPage}>  Contact Us  </li>


          <hr />
          <li>
            <Link to="/blogs"> Blogs</Link>
          </li>
          <hr />
        </ul>
      </div>

      <Login  displaylogin = {displaylogin} setdisplayLogin = {setdisplayLogin}/>   

      <Contact displayContact = {displayContact} setDisplayContact = {setDisplayContact} />

    </>
  );
};

export default SideNavbar;
