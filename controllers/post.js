const Post = require("../model/post.js")

const _new = (req, res) => {
    const { title, description } = req.body
    let post = new Post({
        title,
        description
    })
    post.save()
    .then(doc => res.json(doc))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
    
}

const _all = (req, res) => {
    Post.find()
    .then( docs => res.json(docs))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

module.exports = {
    new: _new,
    all: _all
}