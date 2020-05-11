const tick = Date.now();
const log = (v) => console.log(`${v} \n run time: ${Date.now() - tick}ms`);


const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

const makeSmoothieFaster = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const smoothie = await Promise.all([a, b]);
  return smoothie;
};

const fruitRace = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const winner = await Promise.race([a, b]);

  return winner;
};

// makeSmoothieFaster().then(log);
fruitRace().then(log)
fruitRace().then(log)
fruitRace().then(log)
fruitRace().then(log)
fruitRace().then(log)
