const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app){
app.get("/nanas", function(req, res) {
    db.Nana.findAll({})
    .then(Nanas => res.json(Nanas))
    .catch(err => res.status(422).json(err));
});

// This Route Works! - But we should change what the res.json sends so as to not show the password
app.get("/users", function(req, res) {
  db.User.findAll({})
  .then(Users => res.json(Users))
  .catch(err => res.status(422).json(err));
});

// This Route Works!
app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.send("Login Successful");
  })

// This Route Works!  
app.post("/api/signup", function(req,res) {
    console.log(req.body.email);
    console.log(req.body.password);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/users");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });    
});
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
}