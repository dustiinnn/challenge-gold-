const ErrorResponse = require("../helper/error.helper");

const validate = async (schema, bodies) => {
  try {
    await schema.validateAsync(bodies);
  } catch (error) {
    let messages = [];

    error.details.forEach((detail) => {
      messages.push({
        path: detail.path[0],
        message: detail.message,
      });
    });

    throw new ErrorResponse(400, messages);
  }
};

module.exports = { validate };
