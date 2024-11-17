/* eslint-disable no-dupe-keys */
const Joi = require("joi");

module.exports = {
  register: Joi.object({
    body: {
      email: Joi.string().required(),
      password: Joi.string(),
    },
  }),
  login: Joi.object({
    body: {
      email: Joi.string().required(),
      password: Joi.string(),
    },
  }),
};
