const typeOfNumber = (n) => {
  switch (n) {
    case n > 0:
      console.log('positivo');
      break;
    case n === 0:
      console.log('neutro');
      break;
    case n < 0:
      console.log('negativo');
      break;
      default:
        console.log('Digite apenas números');
  };
}

module.exports = { 
  typeOfNumber
};
