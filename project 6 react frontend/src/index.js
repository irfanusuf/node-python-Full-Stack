import ReactDom from "react-dom/client";
import App from "./App";
import "./main.css";
const targetDiv = ReactDom.createRoot(document.getElementById("root"));

const several = 6;

targetDiv.render(<App several={several} />);
