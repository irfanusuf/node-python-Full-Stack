import React, { useState } from "react";
import "./Login.scss";
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    toast.error("Server Down!");
  };

  const gotoSignUp = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <ToastContainer position="top-left" />

      {showLogin ? (
        <form
          className={
            props.showLogin
              ? "form  animate__animated animate__bounceInLeft"
              : "form-none"
          }
        >
          <IoMdClose
            className="close-button"
            onClick={() => {
              props.setShowLogin(false);
            }}
          />

          <h2> Login</h2>

          <label>Email</label>
          <input placeholder="enter you email here " required />

          <label>Password</label>
          <input placeholder="enter you password here " required />

          <b>
            No account <Link onClick={gotoSignUp}> SignUp here</Link>{" "}
          </b>

          <button className="button " onClick={handleLogin}>
            Login
          </button>
        </form>
      ) : (
        <form
          className={
            props.showLogin
              ? "form  animate__animated  animate__bounceInLeft "
              : "form-none"
          }
        >
          <IoMdClose
            className="close-button"
            onClick={() => {
              props.setShowLogin(false);
            }}
          />

          <h2> Signup</h2>

          <label>Email</label>
          <input placeholder="enter you email here " required />

          <label>Password</label>
          <input placeholder="enter you password here " required />

          <b>
            Already account <Link onClick={gotoSignUp}> Login here</Link>{" "}
          </b>

          <button className="button" onClick={handleLogin}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
