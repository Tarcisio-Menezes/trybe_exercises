const plantsModel = require('../models/plantsModel');

const rate = 0.77;
const rateCountryBrazil = 8;
const rateCountryNotBrazil = 7;
const divisorRate = 2;
const rateMultiply = 1.33;

const registerPlant = async (plant) => {
  const { breed, needsSun, origin, size } = plant;
  const rateCountry = (origin === 'Brazil') ? rateCountryBrazil : rateCountryNotBrazil;

  if (needsSun) {
    const waterFrequency = (size * rate) + rateCountry;
    return plantsModel.plantRegister({ 
      breed, needsSun, origin, size, specialCare: { waterFrequency },
    });
  } const waterFrequency = ((size / divisorRate) * rateMultiply) + rateCountry;
    return plantsModel.plantRegister({ 
      breed, needsSun, origin, size, specialCare: { waterFrequency },
    });
};

module.exports = {
  registerPlant,
};
