"use strict";

//  1) Write a function that receives 3 parameters:amount of money, dayLimit and weekLimit
//  you should calculate how many days does it needs to withdway whole amount of money.

// 2) Write a function that takes text as a parameter, the text should be:
// "What is a plus b?" or "What is a minus b?" you should write correct answer,
// if answer is correct console you're humar other wise consoled you're robot

// 3) write a function that takes 2 parameter the height and width you draw that rectangle with #
// eg: 2, 2 =>
// ##
// ##

// eg: 3:4
// ####
// ####
// ####

// 4) write a function that takes number as a parameter and check is this number wide or not.
// * wide means that If the number of its digits is greater than the sum of the digits.

////////////////////////////////

//1
function withdraw(amount, dayLimit, weekLimit) {
  const maxWeeklyWithdraw = weekLimit;
  let totalWithdrawn = 0;
  let days = 0;

  while (totalWithdrawn < amount) {
    let dailyWithdraw = Math.min(dayLimit, amount - totalWithdrawn);

    if (days % 7 === 0) {
      totalWithdrawn += Math.min(maxWeeklyWithdraw, dailyWithdraw);
    } else {
      totalWithdrawn += dailyWithdraw;
    }

    days++;
  }

  return days;
}

const daysNeeded = withdraw(1000, 200, 1000);
console.log(`Days needed to withdraw the entire amount: ${daysNeeded}`);
//////////////////////////////////

//2
function evaluateExpression(text) {
  const words = text.split(" ");
  const a = parseInt(words[2], 10);
  const operation = words[3];
  const b = parseInt(words[4], 10);
  let correctAnswer;

  if (operation === "plus") {
    correctAnswer = a + b;
  } else if (operation === "minus") {
    correctAnswer = a - b;
  } else {
    console.log("Unsupported operation.");
    return;
  }

  if (correctAnswer === eval(`${a} ${operation === "plus" ? "+" : "-"} ${b}`)) {
    console.log("You're human! 🎉");
  } else {
    console.log("You're a robot! 🤖");
  }
}

evaluateExpression("What is 5 plus 3?");
evaluateExpression("What is 10 minus 2?");

/////////////////////////////////

//3
function rectangle(height, width) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      row += "#";
    }
    console.log(row);
  }
}

rectangle(2, 2);
rectangle(3, 4);
////////////////////////////////

//4
function sumOfDig(num) {
  let sum = 0;
  for (let str of num.toString()) {
    sum += parseInt(str);
  }
  if (num > sum) {
    console.log("number is wide");
  } else {
    console.log("number is not wide");
  }
}

sumOfDig(123);
