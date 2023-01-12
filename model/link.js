const { 
    Schema, 
    model,
} = require("./")

const LinkSchema = new Schema({
    title: {type:String, required:true},
    url: {type:String, required: true},
    clicks: {type: Number, default:0}
})

const Link = model("Link", LinkSchema)

module.exports = Link