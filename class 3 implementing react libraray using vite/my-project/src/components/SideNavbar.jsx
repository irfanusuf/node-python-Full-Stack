import React from "react";
import "./SideNavbar.scss";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="side-bar">


      <div className="brand-name">
        
       <h3> Cognitive</h3>
       <h2>Learning</h2>

       </div>

      <ul >
        <li><Link to='/'> Home</Link></li>
        <hr/>
        <li><Link to='/about'> About</Link></li>
        <hr/>
        <li><Link to='/contact'> Contact</Link></li>
        <hr/>
        <li><Link to='/blogs'> Blogs</Link></li>
        <hr/>
      </ul>
    </div>
  );
};

export default SideNavbar;
