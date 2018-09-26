const express = require('express')
const servidor = express()

servidor.get('/', function(req, resp){
    resp.send("<h1>Home</h1>")
})

servidor.get('/produtos', function(req, resp){
    const produtos = [
        {
            titulo: "Titulo 1"
        },
        {
            titulo: "Titulo 2"
        },
        {
            titulo: "Titulo 3"
        },
    ]

    resp.render('lista.ejs', {
        produtos: produtos
    })
})

servidor.listen(3000, function (){
    console.log("Subiu o servidor")
})
