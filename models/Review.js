module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    nanaid: DataTypes.INTERGER,
    reviewstar: DataTypes.INTERGER,
    reviewtitle: DataTypes.STRING,
    reviewdesc: DataTypes.TEXT     
  });
  return Review;
};