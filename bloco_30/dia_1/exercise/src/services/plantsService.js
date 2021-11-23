const plantsModel = require('../models/plantsModel');

const registerPlant = async (plant) => plantsModel.plantRegister(plant);

module.export = {
  registerPlant,
};
