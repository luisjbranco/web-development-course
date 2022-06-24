"use strict";

let started = false;
let level = 0;
let gamePattern = [];
let userClickedPattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];

const playSound = function (name) {
  const sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
};

const animatePress = function (currentColor) {
  $(`#${currentColor}`).addClass("pressed");

  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
};

const nextSequence = function () {
  userClickedPattern = [];
  level++;
  $("#level-title").text(`Level ${level}`);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
};

const checkAnswer = function (currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
};

const startOver = function () {
  level = 0;
  gamePattern = [];
  started = false;
};

$(document).on("keypress", function () {
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  } else {
    alert("something went wrong");
  }
});

$(".btn").on("click", function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});
