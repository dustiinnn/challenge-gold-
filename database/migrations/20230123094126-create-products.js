"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ProductName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
          as: "UserId",
        },
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
