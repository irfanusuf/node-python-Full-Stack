import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (


    <div className="navbar">
      

      
        <div className="brand-name"> 
        <h1> Robokids.com </h1>
        
        </div>


      <ul>
        <li> <Link  to='/'> Home  </Link>    </li>
        <li> <Link  to='/about'> About </Link>    </li>
        <li> <Link  to='/contact'> Contact </Link>    </li>
        <li> <Link  to='/login'> Login </Link>    </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
