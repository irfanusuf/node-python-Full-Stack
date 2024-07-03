import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const targetDiv = ReactDom.createRoot(document.getElementById("root"));

targetDiv.render(
  <App /> // child component of render function is App
);
