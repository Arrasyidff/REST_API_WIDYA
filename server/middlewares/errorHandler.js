module.exports = (err, req, res, next) => {
  console.log(err.name, "masuk error")
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      if (err.errors[0].message === "email must be unique") {
        res.status(401).json({ msg: "email already exist" })
      }
      break
    case "SequelizeValidationError":
      res.status(401).json({ msg: err.errors[0].message })
      break
    case "invalidAcoount":
      res.status(401).json({ msg: "Invalid email / Password" })
      break
    case "Authenticate":
      res.status(401).json({ msg: "Login First" })
      break
    default:
      res.status(500).json({ msg: "internal service error" })
      break
  }
}
