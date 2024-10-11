"use strict";

//1
const container = document.querySelector(".container");
const input = document.querySelector("input");

input.addEventListener(
  "input",
  debaunce(300, async (e) => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products?title=${e.target.value}`
    );
    displayProducts(res.data);
  })
);

function displayProducts(data) {
  container.innerHTML = data
    .map(
      (el) =>
        `
    <div style="border: 2px solid black">
    <h2>${el.title}</h2>
    </div>
    `
    )
    .join("");
}

function debaunce(ms, callback) {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback(...args);
    }, ms);
  };
}
// --------------------------

//2
const btn = document.querySelector(".btn");

btn.addEventListener("click", async function () {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    const filteredData = response.data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    console.log(filteredData);
  });
});
