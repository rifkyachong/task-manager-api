const Task = require("../model/Task");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks: tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.post("/", async (req, res) => {
  try {
    newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Task.deleteMany({});
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${taskId}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
