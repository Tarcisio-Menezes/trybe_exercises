// testando minha função x gabarito do Exercicio 4.2

// const { getSimpsonById } = require('./exercise4-2');
const { searchById } = require('./exercise4_2');

// getSimpsonById(3)
//   .then(result => console.log(`O personagem é ${result}`))
//   .catch(error => console.log(`Algo deu errado, ${error}`));

searchById(3)
  .then(result => console.log(`O personagem é ${result}`))
  .catch(error => console.log(`Algo deu errado, ${error}`));


async function teste () {
  // const result = await getSimpsonById(2);
  const result2 = await searchById(2);
  console.log(`${result2} resultado da minha func`);
  // console.log(`${result} resultado da func gabarito`);
}

teste();
