"use strict";

// 1) Fetch data from this API: https://jsonplaceholder.typicode.com/users.
// Parse the data so that each object contains only four properties: id, name, username, and email.
//  Write the resulting array to a file called users.json.

// 2) Run the command node main.js Ferrari 2020 red,
// retrieve the data from process.argv, and build a car object with the properties id, carModel, carColor, and
// carReleaseDate. Append this object to cars.json.
// Each time you run this command, a new object should be added to cars.json, so if you run it five times,
// you should have five objects in the file.

// 3) Write a random text into a file named text.txt. Then, read this file and count how many vowels are present.

/////////////////////////

//1
const fs = require("fs");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("error");
    }
    return response.json();
  })
  .then((users) => {
    const filteredUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
    });

    fs.writeFile("users.json", JSON.stringify(filteredUsers), (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });

/////////////////////////

//2
const args = process.argv.slice(2);
const [carModel, carReleaseDate, carColor] = args;

const car = {
  id: Date.now(),
  carModel: carModel,
  carColor: carColor,
  carReleaseDate: carReleaseDate,
};

fs.readFile("cars.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }

  const cars = data ? JSON.parse(data) : [];

  cars.push(car);

  fs.writeFile("cars.json", JSON.stringify(cars), (err) => {
    if (err) {
      console.error(err);
    }
  });
});

////////////////////////

//3

const randomText =
  "in order to become good at something consistency is the key";
fs.writeFileSync("text.txt", randomText, "utf8");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let char of data.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  console.log("Number of vowels:", vowelCount);
});
