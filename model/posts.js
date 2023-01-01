const avisos = require("../controllers/avisos.js")
let { generateId } = require("../utils/functios.js")
module.exports = {
    post: [
        {
            id: "88sdhr",
            title:"Tue bahiano",
            description:"lorem"
        },
    ],
    getAll() {
        return this.post
    },
    newPost(title, description){
        let id = generateId()
        this.post.push({id, title, description})
        return {id, title, description}
    },
    delPost(id){
        let aviso = this.post.filter(post => post.id == id)
        this.post = this.post.filter(post => post.id != id)
        return aviso
    }
}