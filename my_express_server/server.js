"use strict";

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //   console.log(request);
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at luisjbrancog@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hi, my name is Luis Branco and this is my website.");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Beer</li><li>Code</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
