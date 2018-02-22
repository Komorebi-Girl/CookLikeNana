const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // userid: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      // fullname: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      email: {
        type: DataTypes.STRING,
        isUnique : true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },  
      // profileimage: {
      //   type: DataTypes.STRING
      // },
      // address: {
      //   type: DataTypes.STRING,
      //   allowNull:false
      // },
      // bio: {
      //   type: DataTypes.TEXT
      // },
      // italiancuisine: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // },
      // vegetarianvegan: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // },
      // southerncuisine: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // },
      // baking: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // },
      // hispanic: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // }
    });

    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    
    User.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
  };
  