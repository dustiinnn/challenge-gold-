const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required().min(5),
  password: Joi.string().min(8).required(),
  fullname: Joi.string().required(),
}).required();

module.exports = { registerSchema };
