import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./TaskManager.css";

export default function TaskManager() {
  const [userInput, setUserInput] = useState("");
  const [listItem, setListItem] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const xmlhttp = new XMLHttpRequest();
  //   xmlhttp.open("POST", "/addtask");
  //   xmlhttp.setRequestHeader("content-type", "application/json; charset=utf-8");
  //   xmlhttp.send(`{"task" : "${e.target.task.value}"}`);
  // };

  const fetchData = async () => {
    const { data } = await axios.get("/api/v1/tasks");
    setListItem(data.tasks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="app-container">
      <form
        id="task-input-area"
        className="card"
        // onSubmit={handleSubmit}
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
            name="task"
            value={userInput}
            autoComplete={false}
          />
          <button type="submit" id="submit-btn" className="btn">
            Submit
          </button>
        </div>
      </form>
      <ul id="task-list">
        {listItem.map((task) => {
          const { id, name } = task;
          return <TaskItem className="task-item" id={id} name={name} />;
        })}
      </ul>
      <div className="d-grid">
        <button type="button" className="btn clear-all-btn">
          Clear All
        </button>
      </div>
    </div>
  );
}

const TaskItem = ({ id, name, ...props }) => {
  const [complete, setComplete] = useState(false);

  return (
    <li {...props} task-id={id}>
      <i className="complete-icon btn fas fa-check-circle"></i>
      <p className="task-name">{name}</p>
      <button className="btn edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button className="btn delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};
