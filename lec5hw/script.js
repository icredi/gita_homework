"use strict";

// 1) write a function that takes a random number as an argument and logs the random number while the argument number and random number are equal.
//  argument number should be from 0 to 10.

// 2) write a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.

// 3)write a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved.
//  use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2

/////////////

//1
const rand = Math.floor(Math.random() * 11);

function num(argNum) {
  argNum = Math.floor(Math.random() * 11);
  if (argNum === rand) {
    console.log(argNum);
  } else {
    console.log("Not equal");
  }
}

num();
num();
num();
num();
num();
// ------------------

//2
const Data = new Promise((res, rej) => {
  const legitimity = true;
  if (legitimity) {
    res("valid");
  } else {
    rej("fake");
  }
});

Data.then((resolve) => {
  console.log(resolve);
}).catch((reject) => console.log(reject));
//-----------------

//3
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function newFunct() {
  console.log("first");
  await sleep(2000);
  console.log("second");
}

newFunct();
