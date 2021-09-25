const fs = require('fs').promises;

const readAndWhriteDoc = () => {
  const funcPromise = new Promise ((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((data) => {
      const newDoc = data.filter((item) => (
        item.id !== '10' && item.id !== '6'
      ));
      newDoc.length !== 0 ? resolve(fs.writeFile('./simpsons.json', JSON.stringify(newDoc))) : reject(new Error('Não consegui ler o arquivo'));
    })
  });

  return funcPromise;
}

readAndWhriteDoc();
