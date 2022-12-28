const express = require("express")
const verificador = require("../middlewares/semPalavrao")
const post = require("../controllers/ex-controler")
const router = express.Router()

router.get("/", (req, res) => {
    res.json("this is an example of a response from a get request")
})
router.post("/", verificador.json, post.json)
router.post("/url/:word", verificador.url, post.url)
router.post("/query", verificador.query, post.query)

module.exports = router 