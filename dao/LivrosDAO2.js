let ultimoId = 0

function LivrosDAO(conexao){
   this.conexao = conexao
}

LivrosDAO.prototype.lista = function listaLivros(callback) {
    this.conexao.query("SELECT * from livros", callback);
}

LivrosDAO.prototype.salva = function salvaLivros(callback){

}

module.exports = LivrosDAO
