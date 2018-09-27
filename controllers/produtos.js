const mysql = require('mysql')

function lista(req, resp){

    // conexao é push
    const conexao = mysql.createConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
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
