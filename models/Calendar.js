module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    nanaid: DataTypes.INTERGER,
    availableday: DataTypes.STRING,
    availabletime: DataTypes.STRING   
  });
  return Calendar;
};