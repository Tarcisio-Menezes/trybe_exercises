const { question, questionFloat } = require('readline-sync');
const { imcCalc } = require('./functions');

const nome = question('Antes de dizermos seu IMC, diga-nos o seu nome: ');
const altura = questionFloat('Boa! Agora nos diga a sua altura em metros ');
const peso = questionFloat('Estamos indo bem! Para finalizar, nos diga a sua massa em Kg ');
console.log('Tudo OK');
const result = imcCalc(peso, altura);
console.log(`${nome}, seu IMC é de ${result}, de acordo com este cálculo sua situação é ... `);
if (result < 18.5) {
  console.log('Abaixo do peso (magreza)!');
} else if (result >= 18.5 && result <= 24,9 ) {
  console.log('Peso normal!')
} else if (result >= 25 && result <= 29.9) {
  console.log('Acima do peso (sobrepeso)!')
} else if (result >= 30 && result <= 34.9) {
  console.log('Obesidade grau I !')
} else if (result >= 35 && result <= 39.9) {
  console.log('Obesidade grau II !')
} else if (result >= 40) {
  console.log('Obesidade graus III e IV!')
}
