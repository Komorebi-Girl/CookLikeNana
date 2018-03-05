const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes");
const app = express();
const path = require('path');
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const passport = require("./config/passport");

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Readying app for production

app.use(express.static(path.join(__dirname, './build')));
app.use('/login', express.static(path.join(__dirname, './build')));
app.use('/nanas', express.static(path.join(__dirname, './build')));
app.use('/nana', express.static(path.join(__dirname, './build')));
app.use('/user', express.static(path.join(__dirname, './build')));
app.use('/nana/:id', express.static(path.join(__dirname, './build')));
app.use('/user/:id', express.static(path.join(__dirname, './build')));
app.use('/schedule', express.static(path.join(__dirname, './build')));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});