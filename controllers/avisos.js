const Post = require("../model/posts.js")

const _all = (req, res) => {
    res.json(Post.getAll())
}

const _new = (req, res) => {
    const { title, description } = req.body
    let aviso = Post.newPost(title, description)
    res.json(aviso)
}
const _del = (req, res) => {
    const { id } = req.params
    let aviso = Post.delPost(id)
    res.json(aviso)
}

module.exports = {
    all: _all,
    new: _new,
    del: _del
}