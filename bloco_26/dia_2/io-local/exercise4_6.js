const fs = require('fs').promises

const alterPerson = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('./simpsonsFamily.json', 'utf-8')
      .then((data) => JSON.parse(data))
      .then((newDoc) => {
        newDoc = {"id": 5, "name": "Maggie Simpson"};
        newDoc ? resolve(fs.writeFile('./simpsonsFamily.json', JSON.stringify(newDoc)))
          : reject(new Error('Não pude sobrescrever o arquivo :(')); 
      })
  });

  return promise;
};

alterPerson()
.then(() => console.log('A edição foi um sucesso!'))
.catch((erro) => console.log(`A edição falhou! ${erro}`));
