const fs = require('fs').promises;

const file = './simpsons.json';

const readDocs = () => {
  fs.readFile(file, 'utf-8')
    .then((data) => {
      return JSON.parse(data);
    })
    .then((docs) => {
      return docs.map((item) => `${item.id} - ${item.name}`);
    })
    .then((resp) => {
      resp.forEach((string) => console.log(string));
    })
    .catch((error) => {
      console.error(`Ops, obtive o erro: ${error}`)
    });

}
  
readDocs();
