import React, { useState, useRef } from "react";
import "./TaskManager.css";

export default function TaskManager() {
  const [userInput, setUserInput] = useState("");

  return (
    <div id="app-container">
      <form
        id="task-input-area"
        className="card"
        onSubmit={(e) => {
          e.preventdefault();
        }}
      >
        <h2 id="title">Task Manager</h2>
        <div className="input-group">
          <input
            type="text"
            id="task-input"
            className="form-control"
            placeholder="e.g. do the homework"
            onInput={(e) => {
              setUserInput(e.target.value);
            }}
            value={userInput}
          />
          <button type="submit" id="submit-btn" className="btn">
            Submit
          </button>
        </div>
      </form>
      <ul id="task-list">
        <TaskItem className="task-item" />
      </ul>
      <div className="d-grid">
        <button type="button" className="btn clear-all-btn">
          Clear All
        </button>
      </div>
    </div>
  );
}

const TaskItem = (props) => {
  console.log(props);
  const [complete, setComplete] = useState(false);

  return (
    <li {...props}>
      <i class="btn fas fa-check-circle"></i>
      <p className="task-name">Do the homework</p>
      <button className="btn edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button className="btn delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};
