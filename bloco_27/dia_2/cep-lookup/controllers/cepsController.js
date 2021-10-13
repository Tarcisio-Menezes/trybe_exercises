const { findCep, createCep } = require('../services/cepService');
const joi = require('joi');

const ping = (_req, res) => {
  res.status(200).json({ message: 'pong' });
};

const searchByCep = async (req, res, next) => {
  const { cep } = req.params;
  const logradouro = await findCep(cep);
  console.log(logradouro);
  if (logradouro.error) return next(logradouro.error);
  return res.status(200).json(logradouro);
};

const addCep = async (req, res, next) => {
  const { error } = joi.object({
    cep: joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    localidade: joi.string().not().empty().required(),
    uf: joi.string().not().empty().required(),
  }).validate(req.body);

  if(error) return next(error);

  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const result = await createCep(cep, logradouro, bairro, localidade, uf)
  if (result.error) return next(result.error);
  return res.status(201).json(result);
}

module.exports = {
  ping,
  searchByCep,
  addCep,
};
