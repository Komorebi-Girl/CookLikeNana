const db = require("../models");
const passport = require("../config/passport");

module.exports = {
    findAll: function(req, res) {
        console.log("Displaying req.body");
        console.log(req.body);
        db.Nana.findAll({
            where: {
                location: req.body.location,
                italiancuisine: req.body.italiancuisine,
                southerncuisine: req.body.southerncuisine,
                hispaniccuisine: req.body.hispaniccuisine,
                vegetarianvegan: req.body.vegetarianvegan,
                baking: req.body.baking
              }
        })
        .then(dbModel => {
            console.log('data in findAll: ', dbModel)
            res.json(dbModel);
        })
        .catch(err => {
            console.log('Error in findAll: ', err);
            res.status(422).json(err);
        });
    },

    findUsers: function(req, res) {
      db.User.findAll({})
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
    },

    checkLogin: passport.authenticate("local"),

    createNana: function(req, res) {
        console.log("Displaying req.body");
        console.log(req.body);
        db.Nana.create(req.body)
        .then(dbModel => {
            console.log("MADE IT HERE!");
            db.Login.create({
                email: req.body.email,
                password: req.body.password,
                usertype: 1
            })
            .then(userdata => {
                console.log(userdata);
                res.json(userdata);
            })
            .catch(err => {
                console.log('Error in saving data: ', err);
                res.status(422).json(err);
            })
            // console.log('data in create: ', dbModel)
            // res.json(dbModel);
        })
        .catch(err => {
            console.log('Error in create: ', err);
            res.status(422).json(err);
        });
    }, 

    userLogout: function(req, res) {
      req.logout();
      res.redirect("/");
    },

    getUserData: function(req, res) {
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
    },

    createUser: function(req, res) {
        console.log("Displaying req.body");
        console.log(req.body);
        db.User.create(req.body)
        .then(dbModel => {
            console.log("MADE IT HERE!");
            db.Login.create({
                email: req.body.email,
                password: req.body.password,
                usertype: 2
            })
            .then(userdata => {
                console.log(userdata);
                res.json(userdata);
            })
            .catch(err => {
                console.log('Error in saving data: ', err);
                res.status(422).json(err);
            })
            // console.log('data in create: ', dbModel)
            // res.json(dbModel);
        })
        .catch(err => {
            console.log('Error in create: ', err);
            res.status(422).json(err);
        });
    } 


};