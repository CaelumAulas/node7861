const LivrosDAO = require("../dao/LivrosDAO3");

const { createConnectionSync, getConnection } = require("../db/connectionFactory");

async function lista(req, resp, next){
    const conexao = await getConnection()

    const livrosDAO = new LivrosDAO(conexao)
            
    const livros = await livrosDAO.lista()
    
    conexao.release()

    resp.render('produtos/lista', {livros})
}

async function deleteByTitulo(titulo){
    const conexao = await getConnection()
    const livrosDAO = new LivrosDAO(conexao)

    const livro = await livrosDAO.get(titulo)
    await livrosDAO.deleta(livro)
    conexao.release()
}


const queryString = require("query-string")

function criaBodyUrlencoded(req, resp, next){
    let bodyString = ""

    req.on("data", function(chunk){
        bodyString += chunk.toString()
    })

    req.on("end", async function(){
        req.body = queryString.parse(bodyString)
        next()
    })
}

function criaBodyJSON(req, resp, next){
    let bodyString = ""

    req.on("data", function(chunk){
        bodyString += chunk.toString()
    })

    req.on("end", async function(){
        req.body = JSON.parse(bodyString)
        next()
    })
}

async function cadastro(req, resp, next){
    const livro = req.body

    const conexao = await getConnection()
    const livrosDAO = new LivrosDAO(conexao)
    await livrosDAO.salva(livro)
    conexao.release()

    const validationErrors = null;

    if(!validationErrors){
        resp.redirect('/produtos')
    } else {
        resp.render("produtos/form", {
            validationErrors: validationErrors
        })
    }
}

function form(req, resp, next){
    resp.render("produtos/form", {
        validationErrors: []
    })
}

// Revealing Modulle Pattern
module.exports = {
    lista,
    cadastro,
    form
}
