const { searchByCep, addCep } = require('../models/cepsModel');

const findCep = async (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;
  if (cepRegex.test(cep) && cep) {
    const logradouro = await searchByCep(cep);
    if (!logradouro) {
      return {
        error: {
          code: 'notFound',
          message: `O CEP ${cep} não foi encontrado`,
        },
      };
    };
    return logradouro;
  } else {
    return {
      error: {
        code: 'invalidData',
        message: `O CEP: ${cep} é inválido`,
      },
    };
  }
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const existingCep = await findCep(cep);
  if(existingCep.error.code === 'notFound') {
    const result = await addCep(cep, logradouro, bairro, localidade, uf);
    return result;
  }
};

module.exports = {
  findCep,
  createCep,
};
