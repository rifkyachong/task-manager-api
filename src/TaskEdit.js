import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TaskEdit.css";

export default function TaskEdit() {
  const { id: taskID } = useParams();
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);

  const fetchData = async () => {
    // what is the root directory? is it '/' or '/task/:id
    const { data: task } = await axios.get(`/api/v1/tasks/${taskID}`);
    console.log(task);
    setName(task.name);
    setComplete(task.complete);
  };

  const updateTask = async () => {
    await axios.patch(`/api/v1/tasks/${taskID}`, {
      name: name,
      complete: complete,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="app-container">
      <form id="task-input-area" className="card">
        <h2 id="title">Edit Task</h2>
        <div className="form-row">
          <label htmlFor="task-id" className="form-label">
            Task ID
          </label>
          <input
            type="text"
            className="form-input"
            id="task-id"
            value={taskID}
            disabled
          />
        </div>
        <div className="form-row">
          <label htmlFor="task-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="task-name"
            onInput={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="form-row">
          <label htmlFor="task-status" className="form-label">
            Completed
          </label>
          <input
            type="checkbox"
            className="form-input"
            id="task-status"
            onChange={() => {
              setComplete(!complete);
            }}
            checked={complete}
          />
        </div>
        <div className="d-grid">
          <button type="button" className="btn edit-btn" onClick={updateTask}>
            Update Task
          </button>
        </div>
        <Link to="/">
          <div className="d-grid">
            <button type="button" className="btn edit-btn">
              Back To Task Manager
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}
