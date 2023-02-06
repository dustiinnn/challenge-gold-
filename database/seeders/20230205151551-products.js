"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      // {
      //   UserId: 1,
      //   ProductId: 1,
      //   ProductName: "Indomie",
      //   Price: 3000,
      //   Stock: 100,
      // },
      // {
      //   UserId: 2,
      //   ProductId: 2,
      //   ProductName: "Kopi Susu",
      //   Price: 19000,
      //   Stock: 100,
      // },
      // {
      //   UserId: 3,
      //   ProductId: 3,
      //   ProductName: "Matcha Latte",
      //   Price: 24000,
      //   Stock: 100,
      // },
      // {
      //   UserId: 4,
      //   ProductId: 4,
      //   ProductName: "French Fries",
      //   Price: 30000,
      //   Stock: 100,
      // },
      // {
      //   UserId: 5,
      //   ProductId: 5,
      //   ProductName: "Taro Milk Shake",
      //   Price: 29000,
      //   Stock: 100,
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
