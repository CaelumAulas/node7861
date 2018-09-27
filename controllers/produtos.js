const mysql = require('mysql')

function lista(req, resp){

    // conexao é push
    const conexao = mysql.createConnection({
        user: 'root',
        password: '',
        host: 'localhost',
        database: 'cdc',
        port: 32777
    })

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
    
}

function cadastro(){

}

function form(){

}

module.exports = {
    lista,
    cadastro,
    form
}
