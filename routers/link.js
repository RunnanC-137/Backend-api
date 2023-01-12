const express = require("express")
const ControllerLink = require("../controllers/link")
const router = express.Router()

router.get("/new", (req, res) => {
    res.render("newLink", { error:false, body:{} } )
})
router.post("/update/:id", (req, res) => {
    res.render("updateLink", { error:false, body: req.query, id: req.params.id })
})
router.get("/", ControllerLink.render)
router.get("/:title", ControllerLink.redirect)

router.post("/", ControllerLink.new)
router.put("/", ControllerLink.update)
router.delete("/:id", ControllerLink.del)


module.exports = router