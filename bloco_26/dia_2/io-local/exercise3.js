const { calculator } = require('./exercise1');

async function calc() {
  const random1 = Math.round(Math.random() * (100 - 1) + 1, 0);
  const random2 = Math.round(Math.random() * (100 - 1) + 1, 0);
  const random3 = Math.round(Math.random() * (100 - 1) + 1, 0);
  const result = await calculator(random1, random2, random3);
  return console.log(`O resultado de (n1 + n2) * n3 é ${result}`);
}

calc();
