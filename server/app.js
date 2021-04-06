const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")
const routes = require("./routes")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/", routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log("listening on port http://localhost:" + PORT)
})
