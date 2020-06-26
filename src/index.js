import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
