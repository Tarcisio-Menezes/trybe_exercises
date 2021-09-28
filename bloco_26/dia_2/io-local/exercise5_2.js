const fs = require('fs').promises;

const joinFiles = () => {
  const promiseAll = new Promise((resolve, reject) => {
    Promise.all([
      fs.readFile('file1.txt', 'utf-8'),
      fs.readFile('file2.txt', 'utf-8'),
      fs.readFile('file3.txt', 'utf-8'),
      fs.readFile('file4.txt', 'utf-8'),
      ])
      .then(([file1, file2, file3, file4]) => {
        resolve(
          fs.writeFile('./fileAll.txt', JSON.stringify([file1, file2, file3, file4]))
        );
        reject(new Error('Obtive um erro ao juntar os arquivos'));
      });
  });

  return promiseAll;
}

joinFiles()
.then(() => console.log('Join foi realizado com sucesso!'))
.catch((err) => console.log(`Obtive uma falha! ${err}`));
