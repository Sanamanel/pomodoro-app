import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

import "./style.css";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
