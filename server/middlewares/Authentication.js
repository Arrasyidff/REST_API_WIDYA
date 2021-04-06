const { Users } = require("../models")
const { compareToken } = require("../helper/genToken")

module.exports = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) {
      throw {
        name: "Authenticate"
      }
    } else {
      const decoded = compareToken(access_token)
      req.logInUser = decoded;

      const data = await Users.findOne({ where: { id: decoded.id } })
      if (data) {
        next()
      } else {
        throw { name: "Authenticate" }
      }
    }
  } catch (error) {
    next(error)
  }
}
