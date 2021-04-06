'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genders.hasMany(models.Users, {
        foreignKey: "genderId",
        sourceKey: "id"
      })
    }
  };
  Genders.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "name gender cant empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Genders',
  });
  return Genders;
};