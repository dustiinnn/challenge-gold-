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
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
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
