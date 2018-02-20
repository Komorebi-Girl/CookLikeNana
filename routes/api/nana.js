const router = require("express").Router();
const nanaController = require("../../controllers/Controllers");

router.route("/")
  .get(nanaController.findAll)
  .post(nanaController.create);

router
  .route("/nana/:id")
  .get(nanaController.findById)
  .put(nanaController.update)
  .delete(nanaController.remove);

module.exports = router;
