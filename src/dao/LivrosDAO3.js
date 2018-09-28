class DAO {
    constructor(conexao){
        this.conexao = conexao
    }

    lista() {
        return new Promise((callbackSucesso, callbackErro) => {
            this.conexao.query("SELECT * from Livros", function(erro, produtos){
                try {
                    if(!erro){
                        callbackSucesso(produtos)
                    } else {
                        callbackErro(erro)
                    }
                } catch(error){
                    callbackErro(error)
                }
            });
        })
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
