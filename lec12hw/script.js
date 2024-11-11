"use strict";

// 1) Create a function that checks if a received folder name exists in the root directory.

// 2) Create a simple HTTP GET server that reads user data from data.json and returns it to the client.
// Ensure that data.json is present before reading the data.

// 3) Add a new route that returns a random number between 1 and 100 at /random.

// 4) Add a new route that returns a simple HTML table at /html.

// 5) Add a new route that returns the current time in ISO format at /current-time.

// 6) Add a new route that returns an array of objects, such as users, animals, posts, etc., at /api.

////////////////////////

//1
const fs = require("fs");
const path = require("path");

function checkFolder(folderName) {
  const rootDir = path.isAbsolute(folderName) ? folderName : path.resolve("/");
  const folderPath = path.join(rootDir, folderName);

  fs.access(folderPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`The folder '${folderName}' does not exist.`);
    } else {
      console.log(`The folder '${folderName}' exists.`);
    }
  });
}

checkFolder("lec5");
//////////////////

//2

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/user") {
//     const dataFilePath = path.join(__dirname, "data.json");

//     try {
//       const jsonData = JSON.parse(data);
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(jsonData));
//     } catch (err) {
//       console.log(err, "error");
//     }
//   }
// });
////////////////////////

//3
const randomNumber = Math.floor(Math.random() * 100) + 1;

res.end(JSON.stringify({ random: randomNumber }));
////////////////

//4
const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>HTML</title>
    </head>
    <body>
     <p> asjfnbjfbnk </p>
    </body>
    </html>
  `;

if (req.method === "GET" && req.url === "/html") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(htmlContent);
}
//////////////

//5
if (req.method === "GET" && req.url === "/current-time") {
  const currentTime = new Date().toISOString();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ currentTime: currentTime }));
} else {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: "Not Found" }));
}
////////////////

//6
if (req.method === "GET" && req.url === "/api") {
  const data = [
    { id: 1, type: "user", name: "luka", age: 30 },
    { id: 2, type: "user", name: "Bobla", age: 25 },
    {
      id: 3,
      type: "post",
      title: "First Post",
      content: "first post",
    },
    {
      id: 4,
      type: "post",
      title: "Second Post",
      content: "Another post",
    },
  ];

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
} else {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: "Not Found" }));
}
