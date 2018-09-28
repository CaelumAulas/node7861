const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")
servidor.set("views", __dirname + "/views")

require('./routes/home')(servidor)

servidor.use('/produtos', require('./routes/produtos'))

servidor.get("/x", function(req, resp){
    servidor.get("io").emit("novaPromocao", {
        titulo: 'Promocao',
        msg: '50% off'
    })
    resp.redirect("/produtos")
})

servidor.use(express.static(__dirname + '/static'))

servidor.use(function(req, resp){
    resp
    .status(404)
    .format({
        html: () => resp.render('erros/erro', {erro: "404 – Página não encontrada"}),
        json: () => resp.json("404 – Página não encontrada")
    })  
})

servidor.use(function (erro, req, resp, next){
    resp
        .status(500)
        .format({
            html: () => process.env.NODE_ENV == "production"
                ? resp.render('erros/erro', {erro: "Contate os admnistradores"})
                : resp.render('erros/erro', {erro}),
            json: () => resp.json(erro)
        })

    next(erro)
})

servidor.use(function (erro, req, resp, next){
    console.error(erro)
})

module.exports = servidor