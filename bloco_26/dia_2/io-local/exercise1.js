const { calc } = require('./functions');

const calculator = (n1, n2, n3) => {
  const promiseCalculator = new Promise((resolve, reject) => {
    if (typeof (n1) !== 'number' || typeof (n2) !== 'number' || typeof (n3) !== 'number') {
      reject (new Error('Entre apenas com valores numéricos'));
    };
  
    const result = calc(n1, n2, n3);
  
    if (result < 50 ) reject (new Error('Valor muito baixo'));
    else {
      resolve(result);
    };

  });
    
  return promiseCalculator;
}

module.exports = { calculator };
