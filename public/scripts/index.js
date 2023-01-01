
document.addEventListener("DOMContentLoaded", updadePost)

const url = "http://localhost:3000/posts"
//10.0.0.81 casa da mãe
//192.168.0.15 casa da vóvó

function updadePost() {
    fetch(url+"/all")
    .then( res => res.json())
    .then(json => {
        console.log(json)
        let postElements = new Array()
        json.forEach( post => {
            let postElement = `
                <div class="card mb-4">
                    <div class="card-header" id="${post.id}">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${post.description}</p>
                    </div>
                </div>`
            postElements += postElement
        })
        document.querySelector("#posts").innerHTML = postElements
    })
}

function newPost(params) {
    let title = getValue("#title")
    let description = getValue("#description")
    
    fetch(url+"/new", {
        method: "POST",
        headers:new Headers({"content-type": "application/json"}),
        body: JSON.stringify({ title, description })
    }).then(res => {
        console.log(res)
        updadePost()
    })
}

function getValue(idOrClass) {
    let value = document.querySelector(idOrClass).value
    document.querySelector(idOrClass).value = ""
    return value
}