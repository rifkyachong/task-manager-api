import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import TaskManager from "./TaskManager.js";

ReactDOM.render(
  <React.StrictMode>
    <TaskManager />
  </React.StrictMode>,
  document.getElementById("root")
);
