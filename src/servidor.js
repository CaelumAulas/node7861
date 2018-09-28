const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")
servidor.set("views", __dirname + "/views")

require('./routes/home')(servidor)

servidor.use('/produtos', require('./routes/produtos'))

servidor.use(express.static(__dirname + '/static'))

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