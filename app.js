const express = require("express");
const appServer = express();

appServer.use(express.static("public"));

appServer.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

appServer.listen(8080);
