const { Users } = require("../database/models");
const bcrypt = require("bcryptjs");
const { registerSchema } = require("../validations/schemas/register.schema");
const { loginSchema } = require("../validations/schemas/login.schema");
const { validate } = require("../middlewares/validation.middleware");
const ErrorResponse = require("../helper/error.helper");
const Response = require("../helper/response.helper");

class UsersController {
  async register(req, res, next) {
    try {
      const register = {
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname,
      };
      await validate(registerSchema, register);

      const isUserExist = await Users.findOne({
        where: { email: register.email },
        attributes: ["id"],
      });

      if (isUserExist) {
        throw new ErrorResponse(400, "Email already registered");
      }

      const hashPass = await bcrypt.hash(register.password, 10);

      const user = await Users.create({
        email: register.email,
        fullname: register.fullname,
        password: hashPass,
      });

      const data = {
        message: "User register succes!",
        dataUser: {
          fullname: user.fullname,
          email: user.email,
        },
      };
      return new Response(res, 200, data);
    } catch (error) {
      next(error);
    }
  }
  catch(error) {
    res.status(400).json({
      message: error,
    });
  }

  async login(req, res) {
    try {
      const login = {
        email: req.body.email,
        password: req.body.password,
      };

      await validate(loginSchema, login);

      const isUserExist = await Users.findOne({
        where: { email: login.email },
        attributes: ["password"],
      });

      const dataUser = await Users.findOne({
        where: { email: login.email },
        attributes: ["fullname", "email", "password"],
      });

      let dataU = await bcrypt.compare(login.password, isUserExist.password);
      if (dataU) {
        dataU = {
          message: "Login Success!",
          dataUser,
        };
      }
      return new Response(res, 200, dataU);
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
}

module.exports = {
  UsersController,
};
