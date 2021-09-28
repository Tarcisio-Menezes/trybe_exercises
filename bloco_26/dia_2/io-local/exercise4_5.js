const fs = require('fs').promises;

const addSimpsonFamily = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((family) => {
      family.push({
        "id": "8",
        "name": "Nelson Muntz"
      });
      family.length !== 0 ? resolve(fs.writeFile('./simpsonsFamily.json', JSON.stringify(family))) : reject(new Error('A aplicação falhou :('));
    });

  });

  return promise;
}

addSimpsonFamily()
  .then(() => console.log(`A operação funcionou!`))
  .catch((err) => console.log(`Obtive um erro ${err}`));
  // tratar o erro é bom poxa!
  