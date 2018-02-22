const router = require("express").Router();
const nanaController = require("../../controllers/Controllers");

router.route("/nanas")
  .post(nanaController.findAll);

module.exports = router;
