const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")

require('./routes/home')(servidor)
require('./routes/produtos')(servidor)

servidor.use(express.static('./static'))

servidor.use(function(req, resp){
    resp.render('erros/erro', {erro: "404 – Página não encontrada"})
})

servidor.use(function (erro, req, resp, next){
    if(process.env.NODE_ENV == "production"){
        resp.render('erros/erro', {erro: "Contate os admnistradores"})
    } else {
        resp.render('erros/erro', {erro})
    }

    next(erro)
})

servidor.use(function (erro, req, resp, next){
    console.error(erro)
})

module.exports = servidor