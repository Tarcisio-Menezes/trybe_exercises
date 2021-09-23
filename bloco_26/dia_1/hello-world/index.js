const { question, questionInt } = require('readline-sync');
const { mult } = require('./func')

const name = question('Qual seu nome, my friend? ');
const age = questionInt('Qual sua idade, maaan? ');
console.log(`Hello my friend ${name}! You are ${age} years old!`);
const answer = question(`Deseja fazer uma continha de vezes? s/n `)
if (answer === 's') {
  const n1 = questionInt('digite o primeiro número ');
  const n2 = questionInt('digite o segundo número ');
  console.log(`Valeu, ${name}, seu resultado é ${mult(n1, n2)}. Valeu!!`)
} else {
  console.log(`Valeu, flws bro!`)
}
