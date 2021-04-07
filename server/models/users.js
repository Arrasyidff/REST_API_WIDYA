"use strict"
const { Model } = require("sequelize")

const { hashingPass } = require("../helper/genPass")
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Genders, {
        foreignKey: "genderId",
        targetKey: "id"
      })
    }
  }
  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          validateEmptyChar(value) {
            if (!value) {
              throw new Error("name can't be empty")
            }
          },
          validateMinChar(value) {
            if (value.length < 5) {
              throw new Error("name min 5 character")
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          validateEmptyChar(value) {
            if (!value) {
              throw new Error("email can't be empty")
            }
          },
          notEmpty: {
            msg: "email can't be empty"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          validateEmptyChar(value) {
            if (!value) {
              throw new Error("password can't be empty")
            }
          },
          validateMinChar(value) {
            if (value.length < 5) {
              throw new Error("password min 5 character")
            }
          }
        }
      },
      genderId: {
        type: DataTypes.INTEGER,
        validate: {
          validationNullGenderId(value) {
            if (!value) {
              throw new Error("genderId can't be empty")
            }
          },
          isInt: {
            msg: "gender must integer"
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate(user, opts) {
          user.password = hashingPass(user.password)
        }
      },
      sequelize,
      modelName: "Users"
    }
  )
  return Users
}
