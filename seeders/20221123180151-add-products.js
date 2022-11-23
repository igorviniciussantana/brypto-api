'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {  name: 'ethereum', description: 'ethereum is a new crypto...', img_url: 'https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13', price: 6.254 },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};