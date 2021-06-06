const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({ test: "Hi there, it workds" });
});

app.listen(3000, function () {
  console.log("Starting hello-world server...");
});
