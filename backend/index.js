const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({ test: process.env.RABBITMQ_URL });
});

app.listen(5000, function () {
  console.log("Starting hello-world server...");
});
