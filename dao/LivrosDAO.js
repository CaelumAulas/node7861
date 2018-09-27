function listaLivros(conexao, callback) {
    conexao.query("SELECT * from livros", callback);
}

function salvaLivros(conexao, callback){

}


let ultimoId = 0

module.exports = function(conexao){
    const idDAO = ultimoId++

    return {
        lista: callback => listaLivros(conexao, callback),
        salva: callback => salvaLivros(conexao, callback)
    }
}