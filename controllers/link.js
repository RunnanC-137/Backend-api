const Link = require("../model/link")

async function renderPage(req, res){
    try{
        const links = await Link.find()
        res.render("index", { links })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const _redirect = (req, res) => {
    const { title } = req.params
    Link.findOneAndUpdate({ title }, { $inc: { clicks: 1 }})
    .then( doc => res.redirect(doc.url))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}
const _new = (req, res) => {
    const { title, url } = req.body
    Link.findOne({title})
    .then(link => {
        if (link) res.render("newLink.ejs", {error:true, body:req.body})
        else new Link({ 
            title: title.trim(), 
            url 
        }).save()
            .then( doc => res.redirect("/link"))
            .catch(err => {
                console.log(err)
                res.status(500).json({"error": "Title and url is required"})
            })
    })
}

const _delete = (req, res) => {
    const { id } = req.params
    Link.findByIdAndDelete(id)
    .then(() => res.redirect("/link"))
    .catch(err => {
        console.log(err)
        res.status(500).json({"error": "Id not exist"})
    })
}

const _update = (req, res) => {
    const { old_title, title, url, id } = req.body
    Link.findOne({title})
    .then(link => {
        if (link && link.title !== old_title) res.render("updateLink.ejs", {error:true, body:req.body, id})
        else Link.findByIdAndUpdate({_id:id}, {title: title.trim(), url})
        .then((link) => res.redirect("/link"))
        .catch(err => {
            console.log(err)
            res.status(500).json({"error": "Id not exist"})
        })
    })
    
}
module.exports = {
    redirect: _redirect,
    new: _new,
    render: renderPage,
    del: _delete,
    update: _update

}