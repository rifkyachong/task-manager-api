import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import TaskEdit from "./TaskEdit";
import TaskManager from "./TaskManager";
// import NotFound from "./NotFound.js";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<TaskManager />} />
      <Route path="/task/:id" element={<TaskEdit />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
