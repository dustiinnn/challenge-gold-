const Users = require("./user.model");
const Products = require("./products.model");
const Orders = require("./orders.model");
const sequelize = require("./sequelize");
const orderItems = require("./ordersitems.model");

Users.hasMany(Products, {
  foreignKey: "userId",
});

Products.belongsTo(Users, {
  foreignKey: "userId",
});

Products.belongsToMany(Orders, {
  through: "orderItems",
  foreignKey: "productId",
});

Orders.belongsToMany(Products, {
  through: "orderItems",
  foreignKey: "orderId",
});

Users.hasMany(Orders, {
  foreignKey: "userId",
});

Orders.belongsTo(Users, {
  foreignKey: "userId",
});

orderItems.belongsTo(Orders, {
  foreignKey: "orderId",
});

Orders.hasOne(orderItems, {
  foreignKey: "orderId",
});

module.exports = {
  Users,
  Products,
  Orders,
  sequelize,
};
