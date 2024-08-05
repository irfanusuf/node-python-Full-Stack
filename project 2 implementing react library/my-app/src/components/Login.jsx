import React, { useState } from "react";
import "./Login.scss";
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formdata = { email, password };
      const url = "http://localhost:4002/user/login";

      const response = await axios.post(url, formdata);

      if (response.data.message === "logged in successfully!") {
        toast.success("logged in successfully!");
        localStorage.setItem("token", response.data.token);
        setEmail("");
        setPassword("");
        props.setdisplayLogin(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const formdata = { email, username, password };
      const url = "http://localhost:4002/user/register";

      const response = await axios.post(url, formdata);

      if (response.data.message === "user Saved Succesfully") {
        toast.success("user Saved Succesfully");
        setUsername("");
        setShowLogin(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gotoSignUp = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <ToastContainer position="top-left" />

      {/* {showLogin ? "yes" : "no"} */}
      {/* {showLogin &&  "ok"} */}

      {showLogin ? (
        <form
          className={
            props.displaylogin
              ? "form  animate__animated animate__bounceInLeft"
              : "form   animate__animated animate__bounceOutRight "
          }
        >
          <IoMdClose
            className="close-button"
            onClick={() => {
              props.setdisplayLogin(false);
            }}
          />

          <h2> Login</h2>

          <label>Email</label>
          <input
            placeholder="Enter you email here "
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter you password here "
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

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
            props.displaylogin
              ? "form  animate__animated  animate__bounceInLeft "
              : "form-none"
          }
        >
          <IoMdClose
            className="close-button"
            onClick={() => {
              props.setdisplayLogin(false);
            }}
          />

          <h2> Signup</h2>

          <label>Username</label>
          <input
            placeholder="Enter you username here "
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />

          <label>Email</label>
          <input
            placeholder="Enter you email here "
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label>Password</label>
          <input
            placeholder="Enter you password here "
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <b>
            Already account <Link onClick={gotoSignUp}> Login here</Link>{" "}
          </b>

          <button className="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
