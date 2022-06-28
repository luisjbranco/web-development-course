"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.send("<h1>Yay it's the weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
