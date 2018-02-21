module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define("Booking", {
    bookingid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },  
    nanaid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    day: DataTypes.STRING,
    time: DataTypes.STRING, 
    status: DataTypes.STRING     
  });
  return Booking;
};