const post = {
    url: (req, res) => {
        const { word } = req.params
        res.json({response:{word:word, "menssage":"this is an example of a response from a get request"}})
    },
    query: (req, res) => {
        const { word } = req.query
        res.json({response:{word:word, "menssage":"this is an example of a response from a get request"}})
    },
    json: (req, res) => {
        const { word } = req.body
        res.json({response:{word:word, "menssage":"this is an example of a response from a get request"}})
    }
}

module.exports = post

