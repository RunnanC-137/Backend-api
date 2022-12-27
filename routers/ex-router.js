const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json("This is an exp of an anser router")
})