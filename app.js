const express = require("express")
const path = require("path")
const PORT = 3000 //;

const app = express()

app.use(express.json()) //para ler requestes 
app.use(express.urlencoded({ extended: false })) //para ler requestes
app.use(express.static(path.join(__dirname, "client"))) //para servir paginas estaticas
require("./routers/index")(app) //as roters

app.listen(PORT, err => {
    err
    ? console.log(err)
    : null
    console.log("servidor rodando na porta 3000 http://10.0.0.82:3000")
})