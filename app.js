const express = require("express");
const connectDB = require("./database/connect");
require("dotenv").config();

const appServer = express();
const port = 8080;
// router
const tasks = require("./router/tasks");

appServer.use(express.static("public"));
appServer.use(express.json());
appServer.use("/api/v1/tasks", tasks);
appServer.use((req, res, next) => {
  console.log("use method called");
  next();
});
appServer.use("/task/:id", express.static("public"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to database...");
    appServer.listen(
      port,
      console.log(`server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
