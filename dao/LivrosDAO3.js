class DAO {
    constructor(conexao){
        this.conexao = conexao
    }

    lista(callback) {
        this.conexao.query("SELECT * from Livros", callback);
    }

    salva(callback){

    }
}

class LivrosDAO extends DAO{
    constructor(conexao){
        super(conexao)
    }
}

module.exports = LivrosDAO
