'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'quantity', {
      type: Sequelize.INTEGER,
    });
   },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'quantity');
  }
};
