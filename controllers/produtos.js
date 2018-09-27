const LivrosDAO = require("../dao/LivrosDAO3");

const { getConnection } = require("../db/connectionFactory");

function lista(req, resp){
    const conexao = getConnection()

    const livrosDAO = new LivrosDAO(conexao)

    livrosDAO.lista(function(erro, produtos){
        if(!erro){
            resp.render('produtos/lista', {
                livros: produtos
            })
        } else {
            if(process.env.NODE_ENV == "production"){
                resp.render('erros/erro', {erro: "Contate os admnistradores"})
            } else {
                resp.render('erros/erro', {erro})
            }
        }
    })

    conexao.end()
}

function update(titulo){
    const conexao = getConnection()
    const livrosDAO = new LivrosDAO(conexao)

    livrosDAO.get(titulo, function(livro){
        livrosDAO.deleta(livro)
        conexao.end()
    })
}

function cadastro(){
    const conexao = getConnection()
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
