const express = require("express");
const listEndpoints = require("express-list-endpoints");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes");
const path = require("path");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const passport = require("./config/passport");

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up the needed static files for each route
app.use("/", express.static(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/login", express.static(path.join(__dirname, "build")));
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/user/:id", express.static(path.join(__dirname, "build")));
app.get("/user/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/nana/:id", express.static(path.join(__dirname, "build")));
app.get("/nana/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/schedule", express.static(path.join(__dirname, "build")));
app.get("/schedule", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/nana", express.static(path.join(__dirname, "build")));
app.get("/nana", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/nanas", express.static(path.join(__dirname, "build")));
app.get("/nanas", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/user", express.static(path.join(__dirname, "build")));
app.get("/user", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(routes);

console.log(listEndpoints(app));

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
