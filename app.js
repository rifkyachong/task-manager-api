const express = require("express");
const appServer = express();
const port = 8080;
require("dotenv").config();
// router
const tasks = require("./router/tasks");

appServer.use(express.static("public"));
// appServer.use(express.urlencoded({ extended: false }));
appServer.use(express.json());
appServer.use("/api/v1/tasks", tasks);

// appServer.post("/addtask", (req, res) => {
//   console.log(req.body);
//   res.send("submited!");
// });

// appServer.get("/api/v1/tasks")           - get all the tasks
// appServer.post("/api/v1/tasks")          - create task
// appServer.get("/api/v1/tasks/:taskID")   - get single task
// appServer.get("/api/v1/tasks")           - get all the tasks

appServer.listen(port, console.log(`server is listening on port ${port}...`));
