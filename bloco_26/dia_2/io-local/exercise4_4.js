const fs = require('fs').promises;

const familySimpson = () => {
  const familySimpsonPromise = new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((data) => {
      const newDoc = data.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
      newDoc ? resolve(fs.writeFile('./simpsonFamily.json', JSON.stringify(newDoc))) : reject(new Error('Não consegui ler o arquivo'));
    });
  });

  return familySimpsonPromise;
}

familySimpson();
