import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { TiPlus } from "react-icons/ti";
import CreateBlog from "./CreateBlog";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="navbar">
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      
      </ul>

      <div className="nav-icons">
        <span
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <TiPlus />
        </span>

        {showModal && (
          <div className="modal">
            <CreateBlog/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
