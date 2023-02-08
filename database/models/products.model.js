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
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "userId",
    },
    price: {
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
