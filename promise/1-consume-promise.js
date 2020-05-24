// import fetch from "node-fetch";

const fetch = require("node-fetch");
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((res) => res.json())
  .then((todo) => {
    // throw new Error("uh oh");
    return todo;
  })
  .then((todo) => console.log("good", todo.title))
  .catch((err) => console.error("sad", err));

console.log(" this is Synchronous code ");