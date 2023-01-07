const mongoose = require("mongoose")

module.exports = {
    Schema: mongoose.Schema, 
    model: mongoose.model,
    init:() => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/FirstDB")
    mongoose.connection
    .on("error", () => console.log("Houve um error"))
    .once("open", () => console.log("Banco rodando no dominio mongodb://127.0.0.1:27017/FirstDB"))
}}