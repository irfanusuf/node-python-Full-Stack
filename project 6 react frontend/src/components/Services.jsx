import React from "react";
import Contact from "./Contact";

const Services = (props) => {
  return (
    <div style={{backgroundColor : "blue"}}>
      Services

      <h1> services {props.several}  clicked  </h1>


      {/* contact is a child of services  */}
      <Contact several={props.several} />
    </div>
  );
};

export default Services;
