const router = require("express").Router();
const nanaController = require("../../controllers/Controllers");


module.exports = function(router){
  router.route("/nanas")
    .get(nanaController.findAll);

  router.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/nanas");
  })

  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
}
  
// router.route("/nana/:id")
//   .get(nanaController.findById)
//   .put(nanaController.update)
//   .delete(nanaController.remove);

// module.exports = router;
