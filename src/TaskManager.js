import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TaskManager.css";

export default function TaskManager() {
  const [userInput, setUserInput] = useState("");
  const [listItem, setListItem] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/v1/tasks");
    setListItem(data.tasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/tasks", { name: userInput });
    setUserInput("");
    fetchData();
  };

  const deleteItem = async (id) => {
    await axios.delete(`/api/v1/tasks/${id}`);
    fetchData();
  };

  const deleteAll = async () => {
    await axios.delete(`/api/v1/tasks`);
    fetchData();
  };

  const editItem = (id) => {
    window.location.href = `/task/${id}`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="app-container">
      <form id="task-input-area" className="card" onSubmit={handleSubmit}>
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
          return (
            <TaskItem deleteItem={deleteItem} editItem={editItem} {...task} />
          );
        })}
      </ul>
      <div className="d-grid">
        <button type="button" className="btn clear-all-btn" onClick={deleteAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

const TaskItem = ({ _id, name, complete, deleteItem, editItem }) => {
  return (
    <li className="task-item">
      <i
        className="complete-icon btn fas fa-check-circle"
        style={complete ? { visibility: "visible" } : { visibility: "hidden" }}
      ></i>
      <p
        className="task-name"
        style={
          complete
            ? { textDecoration: "line-through" }
            : { textDecoration: "initial" }
        }
      >
        {name}
      </p>
      <Link to={`/task/${_id}`}>
        <button className="btn edit-btn">
          <i class="fas fa-edit"></i>
        </button>
      </Link>
      <button className="btn delete-btn" onClick={() => deleteItem(_id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};
