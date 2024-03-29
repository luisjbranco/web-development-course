"use strict";

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log("Post received");
  const query = req.body.cityName;
  const apiKey = "a03f99a803b7248eae68ab6336aa6a97";
  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, function (response) {
    // console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write("<p>The weather is currently " + weatherDescription + "<p/>");
      res.write(
        `<h1>The temperature in ${query} is ${temp}degrees Celsius.</h1>`
      );
      res.write(`<img src=${imageURL}>`);
      res.send();
    });
    // console.log(weatherDescription);
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
