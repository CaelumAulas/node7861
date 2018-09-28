class DAO {
    constructor(conexao){
        this.conexao = conexao
    }

    lista() {
        return new Promise((callbackSucesso, callbackErro) => {
            this.conexao.query("SELECT * from livros", function(erro, produtos){
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

    salva(livro){
        return new Promise((callbackSucesso, callbackErro) => {
            this.conexao.query("INSERT INTO livros SET ?", livro, function(erro){
                try {
                    if(!erro){
                        callbackSucesso()
                    } else {
                        callbackErro(erro)
                    }
                } catch(error){
                    callbackErro(error)
                }
            });
        })
    }
}

class LivrosDAO extends DAO{
    constructor(conexao){
        super(conexao)
    }
}

module.exports = LivrosDAO
