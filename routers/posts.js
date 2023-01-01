const express = require("express")
const avisosController = require("../controllers/avisos.js")
const router = express.Router()


router.get("/all", avisosController.all)
router.post("/new", avisosController.new)
router.delete("/del/:id", avisosController.del)

module.exports = router