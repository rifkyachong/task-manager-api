const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const tasks = [{ id: "84h3i34u4", name: "doing homework" }];
  res.json({ tasks: tasks });
});

module.exports = router;
