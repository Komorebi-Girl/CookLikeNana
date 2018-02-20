module.exports = function(sequelize, DataTypes) {
    var Nana = sequelize.define("Nana", {
      nanaid: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true
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
        allowNull:false
      },
      bio: {
        type: DataTypes.TEXT
      },
      youtubelink: {
        type: DataTypes.STRING
      },
      cuisineexpertise: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      costperhour: {
        type: DataTypes.DECIMAL
      },
      backgroundcheck: {
        type: BOOLEAN,
        defaultValue: FALSE
      }
    });
    return Nana;
  };
  