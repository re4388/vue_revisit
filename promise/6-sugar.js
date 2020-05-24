// const tick = Date.now();
// const log = (v) => console.log(`${v} \n run time: ${Date.now() - tick}ms`);

// const getFruit = async (name) => {
//   const fruits = {
//     pineapple: "🍍",
//     peach: "🍑",
//     strawberry: "🍓",
//   };

//   return fruits[name];
// };



// const fruits = ["peach", "pineapple", "strawberry"];
// const fruitLoop = async () => {
//   for (const f of fruits) {
//     const emoji = await getFruit(f);
//     log(emoji);
//   }
// };

// fruitLoop().then()


// const fruitInspection = async () => {
//   if ((await getFruit("peach")) === "🍑") {
//     console.log("looks peachy!");
//   }
// };

// fruitInspection().then();


// import fetch from "node-fetch";
const fetch = require("node-fetch");

const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const { title, userId, body } = await res.json();
  console.log(title, userId, body);
};

getTodo().then();