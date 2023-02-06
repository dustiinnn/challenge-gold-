const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class OrderItems extends Model {}
OrderItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "OrderId",
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "ProductId",
    },
    Qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    tableName: "OrderItems",
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
  }
);

module.exports = OrderItems;
