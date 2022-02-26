const asyncWrapper = require("../middleware/async-wrapper");
const Task = require("../model/Task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks: tasks });
});

const postTask = asyncWrapper(async (req, res) => {
  newTask = await Task.create(req.body);
  res.status(201).json(newTask);
});

const deleteAllTasks = asyncWrapper(async (req, res) => {
  await Task.deleteMany({});
  res.status(200).json({});
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `no task with id: ${taskId}` });
  }
  res.status(200).json(task);
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate(
    { _id: taskId },
    { $set: req.body },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  postTask,
  deleteAllTasks,
  getTask,
  editTask,
  deleteTask,
};
