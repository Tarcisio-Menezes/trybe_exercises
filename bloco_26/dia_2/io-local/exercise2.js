const { calculator } = require('./exercise1');

const random1 = Math.round(Math.random() * (100 - 1) + 1, 0);
const random2 = Math.round(Math.random() * (100 - 1) + 1, 0);
const random3 = Math.round(Math.random() * (100 - 1) + 1, 0);

calculator(random1, random2, random3)
  .then(result => console.log(`O resultado de (n1 + n2) * n3 é ${result}`))
  .catch(error => console.log(`Algo deu errado, ${error}`));
