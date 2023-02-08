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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    statusorders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    totalprice: {
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
