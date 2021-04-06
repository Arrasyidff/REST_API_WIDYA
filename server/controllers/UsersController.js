const { Users, Genders } = require("../models")
const { generateToken } = require("../helper/genToken")
const { comparePass } = require("../helper/genPass")

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password, genderId } = req.body
      await Users.create({ name, email, password, genderId })
      let gender
      if (+genderId === 1) {
        gender = "male"
      } else if (+genderId === 2) {
        gender = "female"
      }
      res.status(201).json({ data: { name, email, gender } })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body

      const data = await Users.findOne({ where: { email } })
      if (data) {
        if (comparePass(password, data.password)) {
          const access_token = generateToken({ id: data.id, email: data.email })
          res.status(200).json({ access_token })
        } else {
          throw { name: "invalidAcoount" }
        }
      } else {
        throw { name: "invalidAcoount" }
      }
    } catch (error) {
      next(error)
    }
  }

  static async getData(req, res, next) {
    const data = await Users.findAll({
      where: { id: req.logInUser.id },
      attributes: ["name", "email"],
      include: { model: Genders, attributes: ["name"] }
    })

    const result = {
      name: data[0].name,
      email: data[0].email,
      gender: data[0].Gender.name
    }
    res.status(200).json(result)
  }
}

module.exports = UserController
