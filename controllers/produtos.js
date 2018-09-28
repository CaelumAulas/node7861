const LivrosDAO = require("../dao/LivrosDAO3");

const { createConnectionSync, getConnection } = require("../db/connectionFactory");

async function lista(req, resp, next){
    const conexao = await getConnection()

    const livrosDAO = new LivrosDAO(conexao)
            
    const livros = await livrosDAO.lista()
    
    conexao.release()

    resp.render('produtos/lista', {livros})

    // getConnection()
    //     .then(conexao => {
    //         const livrosDAO = new LivrosDAO(conexao)
            
    //         const livrosPromise = livrosDAO.lista()
    //         livrosPromise.then(() => conexao.release())

    //         return livrosPromise
    //     })
    //     .then(livros => resp.render('produtos/lista', {livros}))
    //     .catch(erro => next(erro))
}

function update(titulo){
    const conexao = createConnectionSync()
    const livrosDAO = new LivrosDAO(conexao)

    livrosDAO.get(titulo, function(livro){
        livrosDAO.deleta(livro)
        conexao.end()
    })
}

function cadastro(){
    const conexao = createConnectionSync()
    livrosDAO.salva(conexao, livro)
    conexao.end()
}

function form(){

}

// Revealing Modulle Pattern
module.exports = {
    lista,
    cadastro,
    form
}
