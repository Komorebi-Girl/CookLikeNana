module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    nanaid: DataTypes.INTEGER,
    reviewstar: DataTypes.INTEGER,
    reviewtitle: DataTypes.STRING,
    reviewdesc: DataTypes.TEXT     
  });
  return Review;
};