'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'quantity', {
      type: Sequelize.INT,
    });
   },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'quantity');
  }
};
