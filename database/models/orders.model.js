const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Orders extends Model {}
Orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    StatusOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    TotalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Orders",
  }
);

module.exports = Orders;
