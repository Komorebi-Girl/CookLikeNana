const router = require("express").Router();
const Controller = require("../../controllers/Controllers");

const passport = require('../../config/passport');

router.route("/nanas")
  .post(Controller.findAll);

router.route("/nana/:id")
  .get(Controller.findNanaById);  

router.route("/nanacalendar/:id")
  .get(Controller.findNanaCalendar);    

router.route("/user/:id")
  .get(Controller.findUserById);  

router.route("/nana")
  .post(Controller.createNana);

router.route("/user")
  .post(Controller.createUser);

router.route("/getusers")
  .post(Controller.findUsers);  

router.route("/login")
  .post(Controller.checkLogin, (req, res) => {
    // console.log(req.user);
    res.send(req.user);
  });  
  

router.route("/logout")
  .post(Controller.userLogout);

router.route("/findtimeslot")
  .post(Controller.findTimeSlot);

router.route("/createtimeslot")
  .post(Controller.createTimeSlot);

router.route("/deletetimeslot")
  .post(Controller.deleteTimeSlot);
  
router.route("/getnanadata")
  .post(Controller.getNanaData);

router.route("/getuserdata")
  .post(Controller.getUserData);     
  
module.exports = router;