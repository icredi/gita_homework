"use strict";

// 1) Check if any number in the array is divisible by 5 and if true, find its index e.g: [3, 6, 10, 12] → 2
// 2) Filter out negative numbers from a nested array e.g: [[1, -2], [3, -4], [5]] → [1, 3, 5]
// 3) Filter out non-array elements and then check if the remaining elements are arrays e.g: [1, [2, 3], "hello", [4]] → true for remaining arrays
// 4) Flatten a nested array and find the sum of all elements e.g: [[2, 4], [6, 8]] → 20
// 5) Flatten a nested array, then square each number, and calculate sum of the squares
// 6) const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// Get the total number of characters by eye color (hint. a map of eye color to count)
// e.g: {
// brown: 1,
// yellow: 1,
// blue: 2
// }

//////////////////////////////////////

// 1
const arr = [3, 6, 10, 12];

function divisible(arr) {
  return arr.findIndex((num) => num % 5 === 0);
}

const index = divisible(arr);

console.log(index);
//------------------------

//2
const arr1 = [[1, -2], [3, -4], [5]];

const merge = arr1.flat(Infinity);
const positives = merge.filter((num) => num > 0);
console.log(merge);
console.log(positives);

const cleanse = arr1.flat(Infinity).filter((num) => num > 0); //merged code

console.log(cleanse);
//------------------------

//3
const arr3 = [1, [2, 3], "hello", [4]];

const newArr = arr3.filter((num) => Array.isArray(num)); // filters array with only array elements

if (Array.isArray(newArr)) {
  console.log(true);
}
//------------------------

//4
const arr4 = [
  [2, 4],
  [6, 8],
];

let sum = 0;

// const merge1 = arr4.flat(Infinity);
// merge1.forEach((nums) => (sum += nums));

const sumOfArr = arr4.flat(Infinity).forEach((num) => (sum += num)); //merged code

console.log(sum);
//------------------------

//5
const arr5 = [
  [2, 4],
  [6, 8],
];

let sum1 = 0;

// const flating = arr5.flat(Infinity);
// mrg.forEach((nums) => (sum1 += nums ** 2));
// console.log(sum1);

const sumOfSquares = arr5.flat(Infinity).forEach((nums) => (sum1 += nums ** 2)); //merged code
console.log(sum1);
//------------------------

//6
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// const eyes = {};
// characters.forEach((characters) => {
//   if (eyes[characters.eye_color]) {
//     eyes[characters.eye_color] += 1;
//   } else {
//     eyes[characters.eye_color] = 1;
//   }
// });

const eyes1 = characters.reduce((tot, curr) => {
  const pickEyes = curr.characters;
  if (tot[pickEyes]) {
    tot[pickEyes]++;
  } else {
    tot[pickEyes] = 1;
  }
}, {});

console.log(eyes1);
