module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    nanaid: DataTypes.INTEGER,
    availableday: DataTypes.STRING,
    availabletime: DataTypes.STRING   
  });
  return Calendar;
};