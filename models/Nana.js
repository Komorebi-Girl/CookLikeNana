module.exports = function(sequelize, DataTypes) {
    var Nana = sequelize.define("Nana", {
      nanaid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
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
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bio: {
        type: DataTypes.TEXT
      },
      youtubelink: {
        type: DataTypes.STRING
      },
      italiancuisine: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vegetarianvegan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      southerncuisine: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      baking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      hispanic: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      costperhour: {
        type: DataTypes.DECIMAL
      },
      backgroundcheck: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Nana;
  };
  