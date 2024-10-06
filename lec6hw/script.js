"use strict";

// 1) make a promise that rejects or resolves 50/50
// 2) write a function that get data from: https://jsonplaceholder.typicode.com/users and return result
// 3) write a function that try to get data from: https://jsonplaceholde.typicode.com (link is invalid for this task) if request will fail try to retrieve it 5 times
// 4) write a function that try to get data from this two sources:  https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users and return the only response which has faster response, use fetch or axios method.
// 5) create a three promise that returns any kind of arrays in different time (ms). one of them should be rejected other two should be fulfilled. merged the only fulfilled arrays.

///////////////

//1
const chance = Math.random() > 0.5;

const newFunction = new Promise((res, rej) => {
  if (chance) {
    res("first half");
  } else {
    rej("second half");
  }
});

newFunction
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => console.log(rej));
//---------------------------

//2
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response;
}
fetchUsers()
  .then((res) => console.log(res))
  .catch((err) => console.error("error", err));
//---------------------------

//3
//---------------------------

//4
const data1Promise = new Promise((res, rej) => {
  setTimeout(() => {
    res = fetch("https://dummyjson.com/users");
  });
});

const data2Promise = new Promise((res, rej) => {
  setTimeout(() => {
    res = fetch("https://jsonplaceholder.typicode.com/users");
  });
});

Promise.race([data1Promise, data2Promise]).then((value) => console.log(value));
// ??
//---------------------------

//5
const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    res([1, 2, 3]);
  }, 2000);
});

const prom2 = new Promise((res, rej) => {
  setTimeout(() => {
    res([7, 8, 9]);
  }, 1000);
});

const prom3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej([4, 5, 6]);
  }, 3000);
});

Promise.allSettled([prom1, prom2, prom3])
  .then(([prom1, prom2]) => {
    const merge = [...prom1, ...prom2].reduce((tot, cur) => tot + cur, 0);
    console.log(merge);
  })
  .catch((err) => console.log(err, "error"));
