const { getConnection } = require("./connectionFactory");

function lista(req, resp){

    // conexao é push
    const conexao = getConnection()

    // produtos é pull
    conexao.query("SELECT * from livros", function(erro, produtos){
        if(!erro){
            resp.render('produtos/lista', {
                livros: produtos
            })
        } else {
            resp.send(erro)
        }
    })

    conexao.end()
}

function cadastro(){

}

function form(){

}

// Revealing Modulle Pattern
module.exports = {
    lista,
    cadastro,
    form
}
