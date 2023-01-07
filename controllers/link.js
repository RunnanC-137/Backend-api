const Link = require("../model/link")

const _redirect = (req, res) => {
    const { title } = req.params
    Link.findOne({ title })
    .then( doc => res.redirect(doc.url))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}
const _new = (req, res) => {
    const { title } = req.params
    const { url } = req.body
    let link = new Link({ 
        title, 
        url 
    })
    link.save()
    .then( doc => res.json(doc))
    .catch(err => {
        console.log(err)
        res.status(500).json({"error": "Title and url is required"})
    })
}
module.exports = {
    redirect: _redirect,
    new: _new,

}