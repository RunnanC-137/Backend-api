const express = require("express")
const path = require("path")
const PORT = 3000 //;
const app = express()
const cors = require("cors")
const methodOverride = require("method-override")


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use( cors({
    origin: [ 
        "http://localhost:3000", 
        "http://192.168.0.15:3000", 
        "http://10.0.0.81:3000" 
    ]
}))
app.use(express.json()) //para ler requestes 
app.use(express.urlencoded({ extended: true })) //para ler requestes

require("./model").init() //o batabase
require("./routers").init(app) //as roters


app.listen(PORT, err => {
    err
    ? console.log(err)
    : null
    console.log("servidor rodando no dominio http://localhost:3000")
})