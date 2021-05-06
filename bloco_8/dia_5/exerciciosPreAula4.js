// Faça uma lista com as suas frutas favoritas
const specialFruit = ['lichia', 'pera', 'uva', 'pêssego', 'morango', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['açaí', 'leite ninho', 'suco de laranja', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSalad = [...fruit, ...additional, 'paçoquinha'];

  return fruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));