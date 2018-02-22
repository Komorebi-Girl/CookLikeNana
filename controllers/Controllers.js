const db = require("../models");

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

    create: function(req, res) {
        console.log("Displaying req.body");
        console.log(req.body);
        db.Nana.create(req.body)
        .then(dbModel => {
            console.log('data in create: ', dbModel)
            res.json(dbModel);
        })
        .catch(err => {
            console.log('Error in create: ', err);
            res.status(422).json(err);
        });
    } 

};