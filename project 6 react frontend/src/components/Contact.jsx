import React, { useState } from "react";

const Contact = (props) => {



  const [x, setX] = useState(0);

  function increment() {
    setX((x)=> x+1);
  }

  function decrement() {
    setX((x)=> x-1);
  }

  return (
    <div style={{backgroundColor: "green" , width: "70%" ,margin : "auto"}}>
      <h1 style={{ textAlign: "center" }}>
        This is a contacts page and we are going to learn passing of props !
      </h1>

      <h2 style={{ textAlign: "center" }}>Click Counter</h2>

      <p style={{ textAlign: "center" }}> No. of clicks </p>

      <p style={{ textAlign: "center" }}> {x} clicks </p>

      <p style={{ textAlign: "center" }}> you clicked {props.several} times </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={decrement}> Decrement </button>
        <button onClick={increment}> Increment </button>
      </div>
    </div>
  );
};

export default Contact;
