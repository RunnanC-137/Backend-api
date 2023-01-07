const { Router } = require("./")
const ControllerLink = require("../controllers/link")
const router = Router()

router.get("/:title", ControllerLink.redirect)
router.post("/new/:title", ControllerLink.new)

module.exports = router