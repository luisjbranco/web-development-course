"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   res.send("Thanks for posting that");
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send(`The result of the calculation is ${result}.`);
});

app.get("/bmicalculator", function (req, res) {
  //   res.send("Hello World");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  //   res.send("Thanks for posting that");
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);
  res.send(`Your BMI is ${bmi}.`);
});

app.listen("3000", function () {
  console.log("Running on port 3000");
});
