const mongoose = require("mongoose")

mongoose.set('strictQuery', true)
// 
// 
mongoose.connect("mongodb://127.0.0.1:27017/FirstDB")
const db = mongoose.connection
db
.on("error", () => console.log("Houve um error"))
.once("open", () => console.log("Banco rodando no dominio mongodb://127.0.0.1:27017/FirstDB"))

module.exports = mongoose