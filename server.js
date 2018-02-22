const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});