const plantsModel = require('../models/plantsModel');

const rate = 0.77;
const rateCountryBrazil = 8;
const rateCountryNotBrazil = 7;
const divisorRate = 2;
const rateMultiply = 1.33;

const registerPlant = async (plant) => {
  const { id, breed, needsSun, origin, specialCare, size } = plant;
  const rateCountry = (origin === 'Brazil') ? rateCountryBrazil : rateCountryNotBrazil;

  const newPlant = {
    id, breed, needsSun, origin, specialCare, size,
  };

  if (needsSun) {
    const waterFrequency = (size * rate) + rateCountry;
    newPlant.specialCare.waterFrequency = waterFrequency;
  } else {
    const waterFrequency = ((size / divisorRate) * rateMultiply) + rateCountry;
    newPlant.specialCare.waterFrequency = waterFrequency;
  }

  return plantsModel.plantRegister(newPlant);
};

module.export = {
  registerPlant,
};
