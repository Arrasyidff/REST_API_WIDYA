const router = require("express").Router()
const Authenticate = require("../middlewares/Authentication")
const UserController = require("../controllers/UsersController")

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/user", Authenticate, UserController.getData)

module.exports = router
