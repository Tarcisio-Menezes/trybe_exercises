const { questionFloat } = require('readline-sync');
const { calc } = require('./functions');

const n1 = questionFloat('Entre com o primeiro valor: ');
const n2 = questionFloat('Entre com o segundo valor: ');
const n3 = questionFloat('Entre com o terceiro valor: ');

const calculator = new Promise((resolve, reject) => {
  if (typeof (n1) !== 'number' || typeof (n2) !== 'number' || typeof (n3) !== 'number') {
    reject (new Error('Entre apenas com valores numéricos'));
  };

  const result = calc(n1, n2, n3);

  if (result < 50 ) reject (new Error('Valor muito baixo'));
  else {
    resolve(result);
    return console.log(`O resultado de (n1 + n2) * n3 é ${result}`);
  };

});

