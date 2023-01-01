const express = require("express")

/** 
*  @param {express} app
*/

function init(app){
    app.use("/posts", require("./posts.js"))
}

module.exports = init