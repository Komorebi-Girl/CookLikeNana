// const express = require("express");
// const router = express.Router();

const db = require("../models");
const passport = require("../config/passport");

module.exports = {
    findAll: function(req, res) {
        db.Nana.findAll({})
        .then(Nanas => res.json(Nanas))
        .catch(err => res.status(422).json(err));
    }    
  };

// router.get("/nanas", function(req, res) {
//     db.Nana.selectAll(function(data) {
//         const hbsObject = {
//         nanas: data
//         };
//         res.render("searchnana", hbsObject);
//     });
// });

// router.post("/signupnana", function(req, res) {
//     db.Nana.create(
//     {
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//         email : req.body.email,
//         password : req.body.password,
//         profileimage : req.body.profileimage,
//         location : req.body.location,
//         bio : req.body.bio,
//         youtubelink : req.body.youtubelink,
//         cuisineexpertise : req.body.expertincuisines
//     })
//     .then(function(dbUser) {
//         res.redirect(307, "/nana");
//     }).catch(function(err) {
//         console.log(err);
//         res.json(err);
//     });
// });

// router.post("/signupuser", function(req, res) {
//     db.User.create(
//     {
//         fullname : req.body.fullname,
//         email : req.body.email,
//         password : req.body.password,
//         profileimage : req.body.profileimage,
//         location : req.body.location,
//         bio : req.body.bio,
//         cuisinepref : req.body.cuisinepref
//     })
//     .then(function(dbUser) {
//         res.redirect(307, "/user");
//     }).catch(function(err) {
//         console.log(err);
//         res.json(err);
//     });
// });

// module.exports = router;