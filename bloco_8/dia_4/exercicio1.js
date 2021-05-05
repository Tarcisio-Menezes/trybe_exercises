// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = () => {
  const evens = numbers.filter((number) => number % 2 === 0);

  const sum = evens.reduce((acumulator, number) => (
    acumulator + number
  ))

  return sum;
}

console.log(sumEven());

// Maneira do course:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152


// Usando apenas o reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evens = (acumulator, number) => {
  return number % 2 === 0 ? number + acumulator : acumulator;
}

const sum = numbers.reduce(evens);

console.log(sum);

// Maneira do couse (mais complicada):

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152
