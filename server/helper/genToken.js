const jwt = require("jsonwebtoken")

const generateToken = data => {
  return jwt.sign(data, "secret")
}

const compareToken = token => {
  return jwt.verify(token, "secret")
}

module.exports = {
  generateToken,
  compareToken
}
