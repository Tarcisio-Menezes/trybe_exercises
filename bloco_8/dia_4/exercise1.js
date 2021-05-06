
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newMatriz = arrays.reduce((acc, value) => (
      acc.concat(value)));

  return newMatriz;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

console.log(flatten());
