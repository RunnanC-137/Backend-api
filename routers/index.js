const express = require("express")
const router = express.Router()
/** 
*  @param {express} app
*/
function init(app){
    app.use("/", require("./ex-router"))
}

module.exports = init