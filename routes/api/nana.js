const router = require("express").Router();
const nanaController = require("../../controllers/Controllers");

router.route("/nanas")
  .post(nanaController.findAll);

router.route("/nana")
  .post(nanaController.create);

module.exports = router;