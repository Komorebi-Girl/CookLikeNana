module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
      email: {
        type: DataTypes.STRING,
        isUnique : true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      usertype: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

    // Login.prototype.validPassword = function(password) {
    //   return bcrypt.compareSync(password, this.password);
    // };
    
    // Login.hook("beforeCreate", function(user) {
    //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });

    return Login;
  };
  