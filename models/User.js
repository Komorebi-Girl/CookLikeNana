
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userid: {
        type: DataTypes.INTEGER,
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
        allowNull: false
      },  
      profileimage: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING,
        allowNull:false
      },
      bio: {
        type: DataTypes.TEXT
      },
      italiancuisine: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      southerncuisine: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      hispaniccuisine: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vegetarianvegan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      baking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    return User;
  };
  