const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/plantsService');

const plantRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    breed: joi.string().required,
    needsSun: joi.boolean().required(),
    origin: joi.string().required(),
    size: joi.number().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { breed, needsSun, origin, size } = req.body;

  const plant = { breed, needsSun, origin, size };

  const register = await service.plantRegister(plant);
  if (register.error) return next(register.error);
  return res.status(200).json(register);
});

module.exports = {
  plantRegister,
};
