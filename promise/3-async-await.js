// add async keyword, this will be handle async way
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");
  return [a, b];
};

makeSmoothie("peach").then(console.log);  // -> Array(2) ["🍍", "🍓"]

// messier if use promise then
// const makeSmoothie2 = () => {
//   let a;
//   return getFruit("pineapple")
//     .then((v) => {
//       a = v;
//       return getFruit("strawberry");
//     })
//     .then((v) => [a, v]);
// };
