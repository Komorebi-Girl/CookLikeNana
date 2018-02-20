module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define("Booking", {
    bookingid: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true
    },  
    nanaid: DataTypes.INTERGER,
    userid: DataTypes.INTERGER,
    day: DataTypes.STRING,
    time: DataTypes.STRING, 
    status: DataTypes.STRING     
  });
  return Booking;
};