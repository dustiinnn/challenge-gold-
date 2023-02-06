const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Products extends Model {}
Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "UserId",
    },
    Price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Products",
  }
);

module.exports = Products;
