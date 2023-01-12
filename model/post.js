const mongoose = require("./index")

const PostSchema = new mongoose.Schema({
	title: String,
	description: String		
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post