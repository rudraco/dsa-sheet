const router = require("express").Router();
const topicsController = require("../controller/topic");
const validate = require("../helpers/validate");
const paramValidation = require("../config/param-validation");
// const { checkCacheMiddleware } = require("../helpers/cache");

router
  .route("/")
  .get(topicsController.getTopics)
  .post(validate(paramValidation.createTopic), topicsController.createTopic);

router
  .route("/:topicId/chapters")
  .post(validate(paramValidation.addChapter), topicsController.addChapter);

router
  .route("/complete")
  .post(validate(paramValidation.addChapter), topicsController.completeProblem);

module.exports = router;
