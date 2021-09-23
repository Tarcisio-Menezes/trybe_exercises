const readLine = require('readline-sync');

const name = readLine.question('Qual seu nome, my friend? ');
const age = readLine.questionInt('Qual sua idade, maaan? ');

console.log(`Hello my friend ${name}! You are ${age} years old!`);
