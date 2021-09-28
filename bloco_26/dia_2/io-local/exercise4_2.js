const fs = require('fs').promises;

const searchById = (id) => {
  const searchPromise = new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((data) => {
      const result = data.find((element) => id === element.id)
      result ? resolve(result) : reject(new Error('Id não encontrado'));
    })
  })

  return searchPromise;
};

module.exports = { searchById };
