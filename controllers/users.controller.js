const { Users } = require("../database/models");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const schema = require("../validations/schemas/register.schema");
const validate = require("../middlewares/validation.middleware");
const ErrorResponse = require("../helper/error.helper");
const Response = require("../helper/response.helper");

class UsersController {
  async register(req, res) {
    try {
      const { email, password, name } = req.body;
      await validate(schema, req.body);
      const isUserExist = await Users.findOne({
        where: {
          email,
          password,
        },
        attributes: ["id"],
      });
      if (isUserExist) {
        throw error(400, "Email already registered");
      }
      const hashPass = await bcrypt.hash(password, 10);

      const user = await Users.create({
        email,
        password: hashPass,
        FirstName: name,
      });

      // const jwtPayload = {
      //   UsersId: user.id,
      // };
      // const accesToken = jwt.sign(jwtPayload, process.env.jWT_KEY, {
      //   expiresIn: "24h",
      // });

      res.status(200).json({
        message: "Success!",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async deleteUsers(req, res) {
    const result = await Users.destroy();
    res.status(200).json({
      message: "User delete succesfully.",
      user: result,
    });
  }
}

module.exports = {
  UsersController,
};
