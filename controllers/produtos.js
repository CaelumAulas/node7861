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
