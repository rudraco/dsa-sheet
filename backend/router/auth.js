const router = require("express").Router();
const authController = require("../controller/auth");
const validate = require("../helpers/validate");
const paramValidation = require("../config/param-validation");
// const { checkCacheMiddleware } = require("../helpers/cache");

router
  .route("/register")
  .post(validate(paramValidation.register), authController.register);

router
  .route("/login")
  .post(validate(paramValidation.login), authController.register);

module.exports = router;
