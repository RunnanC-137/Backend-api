const express = require("express")
const Controllerpost = require("../controllers/post.js")
const router = express.Router()


router.get("/all", Controllerpost.all)
router.post("/new", Controllerpost.new)
//router.delete("/del/:id", avisosController.del)

module.exports = router