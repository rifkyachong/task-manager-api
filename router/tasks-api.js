const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  postTask,
  deleteAllTasks,
  getTask,
  editTask,
  deleteTask,
} = require("../controller/tasks-api-controller");

router.get("/", getAllTasks);

router.post("/", postTask);

router.delete("/", deleteAllTasks);

router.get("/:id", getTask);

router.patch("/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
