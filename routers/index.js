const express = require("express")
const router = express.Router()
/** 
*  @param {express} app
*/
function init(app){
    app.use("/", router.get("/", require("./ex-router")))
}

module.exports = init