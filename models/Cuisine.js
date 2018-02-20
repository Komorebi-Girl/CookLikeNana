module.exports = function(sequelize, DataTypes) {
  var Cuisine = sequelize.define("Cuisine", {
    cuisine: DataTypes.STRING
  });
  return Cuisine;
};