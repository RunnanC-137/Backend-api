const { Router } = require("./")
const ControllerLink = require("../controllers/link")
const router = Router()

router.get("/new", (req, res) => {
    res.render("index.ejs")
})
router.get("/:title", ControllerLink.redirect)
router.post("/new", ControllerLink.new)

module.exports = router