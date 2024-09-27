"use strict";

// 1) Create a function that counts the Number of Digits in Each Element, e.g: [123, 45, 6] becomes [3, 2, 1]).

// 2) Write a function that takes an array of numbers and reverses the order of its elements using a loop. Don't use reverse().
//  e.g: [1,2,3] => [3,2,1]

// 3) Write a function that returns the sum of the squares of all the numbers in an array (e.g., [1, 2, 3] returns 1^2 + 2^2 + 3^2 = 14).
// Use a loop to calculate the squares.

// 4) Write a function that counts the total number of characters in all the strings in an array. e.g:["a", "ab", "abc"] => 6

// 5) Write a function that takes an array of strings and returns the new array with the palindrome words.
//  palindrome words are level, becase if you reverse this word its the same, like madam.
//   e.g: ['level', 'giga', 'ana', 'button', 'abba'] => ['level', 'ana', 'abba']

// 6) Task: Write a function that filters out all words from an array that contain special characters (e.g., @, #, $).

// Bonus: Return both the filtered array and the removed words. dont use filter metohds use it with for loop.

///////////////////////////////////////////////////////////////

1
function getlength(numbers) {
  return numbers.map((number) => number.toString().length);
}

console.log(getlength([123, 45, 6]));
console.log(getlength([1236, 21445, 26]));
--------------------

2
function numbers(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(numbers([1, 2, 3]));
console.log(numbers([1, 10, 100]));
--------------------

3
function squareSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    const square = [arr[i] ** 2];

    for (let i = 0; i <= square.length - 1; i++) {
      sum += square[i];
    }
  }
  return sum;
}

console.log(squareSum([1, 2, 3]));
console.log(squareSum([4, 5, 6]));
--------------------

4
const alpha = ["a", "ab", "abc"];

const sum = alpha.join("").length;
console.log(sum);
--------------------

5
const arr = ["level", "giga", "ana", "button", "abba"];

function palindrome(str) {
  const newArr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i].split("").reverse().join("")) {
      newArr.push(str[i]);
    }
  }
  return newArr;
}

console.log(palindrome(arr));
--------------------

6
const arr = ["aei%%ou", "abc$", 123, "george", "@112emer"];

function cleanse(itm) {
  let filtered = [];
  let removed = [];
  const specChars = /[^a-zA-Z0-9]/;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (specChars.test(itm[i])) {
      removed.push(itm[i]);
    } else {
      filtered.push(itm[i]);
    }
  }
  return [filtered, removed];
}

console.log(cleanse(arr));
