const express = require("express")

/** 
*  @param {express} app
*/

function init(app){
    app.use("/posts", require("./post.js"))
}

module.exports = init