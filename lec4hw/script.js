"use strict";

// 1)  Write a function that takes two or more objects as arguments and merges them into a single object
// 2)  Write a function that takes an object and a key as input and deletes the specified key from the object.
// 3) Create an object representing a car with properties for make, model, and year. Then add a method that returns the car's full description.
// 4) Create an object representing a shopping cart. Add methods to add items, remove items, and calculate the total price.

/////////////////////////

// 1
const obj1 = {
  middleName: "jon",
  age: 21,
};

const obj2 = {
  name: "tomas",
  lastname: "jonas",
};

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects(obj1, obj2));
// --------------------

// 2
const obj3 = {
  middleName: "jon",
  age: 21,
  eye_color: "blue",
  height: 182,
};

function modifyObj(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
  return obj;
}

console.log(modifyObj(obj3, "height"));
// --------------------

// 3
const vehicle = {
  make: "porsche",
  model: 911,
  year: 1991,
  full: function () {
    return `${this.make} || ${this.model} || ${this.year}`;
  },
};

console.log(vehicle.full());
// --------------------

// 4
const shoppingCart = {
  cheese: 14.09,
  wine: 20.5,
  drinking_soda: 3.49,
};

shoppingCart.ham = 7.3;
delete shoppingCart.wine;
let sum = Object.values(shoppingCart).reduce((acc, curr) => acc + curr, 0);

console.log(sum);
