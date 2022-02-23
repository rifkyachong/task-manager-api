const mongoose = require("mongoose");
const { Resolver } = require("webpack");

// connect to mongoDB

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    modifyDatabaseExample();
  } catch (error) {
    console.log(error);
  }
};

modifyDatabaseExample = async () => {
  console.log("connected to database...");
  // create a schema
  const taskSchema = new mongoose.Schema({
    name: String,
    complete: Boolean,
  });
  //create a model
  const Task = mongoose.model("Task", taskSchema);

  //create a document
  // const task1 = new Task({ name: "learn mongoDB", complete: false });

  //save the document to the database
  // task1.save();
  // console.log("modification process completed");

  //get all the data with the Task model;

  const tasks = await Task.find();
};

// connectDB(uri);
