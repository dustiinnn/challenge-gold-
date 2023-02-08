"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        Stock: 100,
        ProductName: "Indomie",
        Price: 3000,
      },

      {
        Stock: 100,
        ProductName: "Sarimi",
        Price: 3500,
      },

      {
        Stock: 100,
        ProductName: "Kopi Susu",
        Price: 10000,
      },
      {
        Stock: 100,
        ProductName: "Aqua",
        Price: 2800,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
