"use strict";

// 1) Check if a string starts with an uppercase letter.

// 2) Test if a string is a valid date in DD/MM/YYYY format

// 3) Validate a GE phone number in the format 598-12-34-56

// 4) Validate the emails that ends with @example.com

// 5) Save the random horoscop data like 10 into localstorage and when user enter the website,
//  display different horoscop to difference day. like  first day first horoscop, second day second horoscop and etc.

// 6) Make a form with three inputs name, email and phone number,
//  when user try to enter each of this field you should save this info into localstorage.
//  if you typing info and refresh the page, the info that you wrote should not be deleted.

// 7) Create a two button En Ka and the random text below, if you choose,
//  en the random text should be translated into english,
// when you click ka it should be translated into georgian language. use localstorage to save this info.

/////////////////////////////////

// 1
const str = "String";
const checkUp = /^[A-Z]/.test(str);
console.log(checkUp);
// ----------------

// 2
const str1 = "22/10/1998";
const checkUp1 = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(
  str1
);
console.log(checkUp1);
// ----------------

// 3
const str2 = "598-12-34-56";
const checkUp2 = /^\d{3}-\d{2}-\d{2}-\d{2}$/.test(str2);
console.log(checkUp2);
// ----------------

// 4
const str3 = "fdjilsdak@example.com";
const checkUp3 = /^[a-zA-Z0-9._%+-]+@example\.com$/.test(str3);
console.log(checkUp3);
// ----------------

// 5

// ----------------

// 6
document.body.style.background = "#000";

const name1 = document.querySelector(".name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

const submit = document.querySelector(".sub");

submit.addEventListener("click", () => {
  const nameInput = name1.value;
  const emailInput = email.value;
  const phoneInput = phone.value;

  localStorage.setItem("name", nameInput);
  localStorage.setItem("email", emailInput);
  localStorage.setItem("phone", phoneInput);
});
// ----------------

// 7
