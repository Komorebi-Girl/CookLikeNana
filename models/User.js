module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userid: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        isUnique : true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },  
      profileimage: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING,
        allowNull:false
      },
      bio: {
        type: DataTypes.TEXT
      },
      cuisinepref: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      }
    });
    return User;
  };
  