const { question, questionFloat } = require('readline-sync');
const { randomGame } = require('./functions');

const gincana = () => {
  const nome = question('Antes de começarmos a gincana, diga-nos o seu nome: ');
  const numero = questionFloat('Boa! Agora tente adivinhar o número que estamos pensando ');
  const sortNumber = randomGame();
  if (sortNumber === numero) {
    console.log(`Quee demais ${nome}, você acertou, ${sortNumber}, é o número que estou pensando!! `);
  } else if (sortNumber !== numero) {
    const tentar = question('Que pena my friend, você errou! Quer tentar adivinhar novamente? s/n ');
    if (tentar === 's') {
      gincana();
    } else {
      console.log(`Valeu my friend ${nome}, até a próxima!`)
    }
  };
}

gincana();
