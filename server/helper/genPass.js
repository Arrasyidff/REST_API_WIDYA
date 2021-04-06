const bcrypt = require("bcrypt")

const hashingPass = pass => {
  const salt = bcrypt.genSaltSync(8)
  return bcrypt.hashSync(pass, salt)
}

const comparePass = (pass, hashPass) => {
  return bcrypt.compareSync(pass, hashPass)
}

module.exports = {
  hashingPass,
  comparePass
}
