const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class orderItems extends Model {}
orderItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "orderId",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "productId",
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    tableName: "ordersItems",
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
  }
);

module.exports = orderItems;
