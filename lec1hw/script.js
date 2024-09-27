"use strict";

// 1) You need to write a function that reverses the words in a given string.
// Words are always separated by a single space. e.g: "Hello World" --> "World Hello"

// 2) Write a function that cleans whole sentences to numbers. eg: 'This looks5 grea8t!' -> 'This looks great!'

// 3) Given a string, you have to return a string in which each character (case-sensitive) is repeated once. e.g: "String"      -> "SSttrriinngg"
// e.g: "Hello World" -> "HHeelllloo  WWoorrlldd"

// 4) Make a function that takes a sentences and return the abbreaviate of it. e.g: Sam Harris => S.H.   e.g: hello world everyone => H.W.E

// 5)Make a function that takes a number as an argument and return random word which length would be the number.
//  e.g: 4 => 'h1zt',  5 => 'zvc1e'. you should build random string from all characters and numbers.

// ------------------------------------------------------------------

// 1
function reverse(word) {
  return word.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World"));
// ---------------------------------

// 2
function clearNumber(sentence) {
  return sentence.replace(/\d/g, "");
}

console.log(clearNumber("This looks5 grea8t!"));
// ---------------------------------

// 3
function repeatChar(word) {
  return word.replace(/(.)/g, "$1$1");
}

console.log(repeatChar("string"));
console.log(repeatChar("Hello World"));
// ---------------------------------

// 4
function abbreaviate(sentence) {
  return sentence.toUpperCase().match(/\b\w/g).join(".") + ".";
}

console.log(abbreaviate("Sam Harris"));
console.log(abbreaviate("hello world everyone"));
// ---------------------------------

// 5
function randomStr(number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

console.log(randomStr(4));
console.log(randomStr(5));
console.log(randomStr(7));
console.log(randomStr(10));
