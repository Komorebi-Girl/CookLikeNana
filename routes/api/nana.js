const router = require("express").Router();
const nanaController = require("../../controllers/Controllers");

router.route("/nanas")
  .get(nanaController.findAll);

// router.route("/nana/:id")
//   .get(nanaController.findById)
//   .put(nanaController.update)
//   .delete(nanaController.remove);

module.exports = router;
