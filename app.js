const express = require("express")
const path = require("path")
const PORT = 3000 //;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "client")))
require("./routers/index")(app)

app.listen(PORT, err => {
    err
    ? console.log(err)
    : null
    console.log("servidor rodando na porta 3000 http://10.0.0.81:3000")
})