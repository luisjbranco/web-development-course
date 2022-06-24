"use strict";

// Create variables for the images

const diceImage1 = document.querySelector("img.img1");
// console.log(diceImage1);
const diceImage2 = document.querySelector("img.img2");

// 2 random numbers
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Set the image sources
const diceImageSource1 = `images/dice${randomNumber1}.png`;
// console.log(diceImage1);
const diceImageSource2 = `images/dice${randomNumber2}.png`;

// Change the image sources
diceImage1.setAttribute("src", diceImageSource1);
diceImage2.setAttribute("src", diceImageSource2);

const titleDisplay = document.querySelector("h1");

const result = function () {
  if (randomNumber1 > randomNumber2) {
    titleDisplay.textContent = "🚩Player 1 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    titleDisplay.textContent = "Draw!";
  } else {
    titleDisplay.textContent = "🚩Player 2 Wins!";
  }
};

result();
