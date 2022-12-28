const verificador = {
    palavroes: ["porra"],
    url: function(req, res, next) {
            if (verificador.palavroes.indexOf(req.params.word) != -1)
                res.json({"error":"this word is not permitid"})
            else next()
    },
    query: function(req, res, next) {
            if (verificador.palavroes.indexOf(req.query.word) != -1)
                res.json({"error":"this word is not permitid"})
            else next()
    },
    json: function(req, res, next) {
            if (verificador.palavroes.indexOf(req.body.word) != -1)
                res.json({"error":"this word is not permitid"})
            else next()
        }

}

module.exports = verificador