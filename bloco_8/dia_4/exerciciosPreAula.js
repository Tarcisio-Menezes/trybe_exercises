const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

//const getSum = (result, number) => result + number;
//const sumNumbers = numbers.reduce(getSum);
//console.log(sumNumbers); // 113


// Ex:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  //console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Ex:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  //console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// Ex:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0 e 10"
console.log(sumNumbers); // 123

//  Neste exemplo, serão comparados valores para buscar o maior valor em um array.
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
  