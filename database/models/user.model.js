const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FullName: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Users",
  }
);

module.exports = Users;
