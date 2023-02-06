const Users = require("./user.model");
const Products = require("./products.model");
const Orders = require("./orders.model");
const sequelize = require("./sequelize");

// Products.belongsTo(Users,{
//     as:'owner',
//     foreignKey:'UserId'
// })

// Products.hasOne(Orders)

// Users.hasMany(Products,{
//     as: 'products'
// })

// Users.hasMany(Orders,{
//     as: 'orders'
// })
Users.hasMany(Products, {
  foreignKey: "UserId",
});

Products.belongsTo(Users, {
  foreignKey: "UserId",
});

Products.belongsToMany(Orders, {
  through: "OrderItems",
  foreignKey: "ProductId",
});

Orders.belongsToMany(Products, {
  through: "OrderItems",
  foreignKey: "OrderId",
});

Users.hasMany(Orders, {
  foreignKey: "UserId",
});

Orders.belongsTo(Users, {
  foreignKey: "UserId",
});

module.exports = {
  Users,
  Products,
  Orders,
  sequelize,
};
