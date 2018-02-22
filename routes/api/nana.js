const router = require("express").Router();
const Controller = require("../../controllers/Controllers");

router.route("/nanas")
  .post(Controller.findAll);

router.route("/nana")
  .post(Controller.createNana);

router.route("/user")
  .post(Controller.createUser);

module.exports = router;