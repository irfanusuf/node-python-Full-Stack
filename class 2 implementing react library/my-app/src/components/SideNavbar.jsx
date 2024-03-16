import React, { useState } from "react";
import "./SideNavbar.scss";
import { Link } from "react-router-dom";
import Login from "./Login";

const SideNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true); 
  };

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
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <hr />
          <li>
            <Link to="/blogs"> Blogs</Link>
          </li>
          <hr />
        </ul>
      </div>

      <Login  showLogin = {showLogin} setShowLogin = {setShowLogin}/>   

    </>
  );
};

export default SideNavbar;
