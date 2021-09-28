const fs = require('fs').promises;

const writeAll = () => {
  const promiseAll = new Promise((resolve, reject) => {
    resolve(
      Promise.all([
      fs.writeFile('file1.txt', 'Finalmente'),
      fs.writeFile('file2.txt', 'estou'),
      fs.writeFile('file3.txt', 'usando'),
      fs.writeFile('file4.txt', 'Promise.all'),
      ])
    );
    reject(new Error('A aplicação falhou miseravelmente'));
  })
  
  return promiseAll;
};

writeAll()
.then(() => console.log('Sucesso'))
.catch((err) => console.log(`Falha! Obtive um ${err}`));
