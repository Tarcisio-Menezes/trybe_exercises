const { question, questionInt } = require('readline-sync');

const name = question('Qual seu nome, my friend? ');
const age = questionInt('Qual sua idade, maaan? ');

console.log(`Hello my friend ${name}! You are ${age} years old!`);
