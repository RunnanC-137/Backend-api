const express = require("express")
const path = require("path")
const PORT = 3000 //;
const app = express()
const cors = require("cors")

app.use( cors({
    origin: [ 
        "http://localhost:3000", 
        "http://192.168.0.15:3000", 
        "http://10.0.0.81:3000" 
    ]
}))
app.use(express.json()) //para ler requestes 
app.use(express.urlencoded({ extended: false })) //para ler requestes
require("./model").init() //o batabase
require("./routers").init(app) //as roters


app.listen(PORT, err => {
    err
    ? console.log(err)
    : null
    console.log("servidor rodando no dominio http://localhost:3000")
})