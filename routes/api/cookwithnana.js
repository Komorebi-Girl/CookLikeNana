const router = require("express").Router();
const Controller = require("../../controllers/Controllers");

router.route("/nanas")
  .post(Controller.findAll);
  
router.route("/nana/:nanaid")
  .get(Controller.findNanaById);

router.route("/nana")
  .post(Controller.createNana);

router.route("/user")
  .post(Controller.createUser);

router.route("/getusers")
  .post(Controller.findUsers);  

router.route("/login")
  .post(Controller.checkLogin);  
  
router.route("/logout")
  .post(Controller.userLogout);

router.route("/getdata")
  .post(Controller.getUserData);  
  
module.exports = router;