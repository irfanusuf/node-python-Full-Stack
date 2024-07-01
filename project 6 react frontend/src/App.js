import React from "react";
import Services from "./components/Services";

const App = (props) => {


  return (
    <>

        <h1> this is a main app {props.several}</h1>
      <Services several = {props.several} />
    </>
  );
};

export default App;
