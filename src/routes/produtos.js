const ProdutosController = require('../controllers/produtos')

function catchErrors(handler){
    return function(req, resp, next){                
        handler(req, resp, next)?.catch(erro => next(erro))
    }
}

module.exports = function(express){
    const roteadorProdutos = express.Router()

    roteadorProdutos.use(express.urlencoded())
    roteadorProdutos.use(express.json())

    roteadorProdutos.get('/', catchErrors(ProdutosController.lista))
    roteadorProdutos.get('/form', catchErrors(ProdutosController.form))
    roteadorProdutos.post('/', catchErrors(ProdutosController.cadastro))

    return roteadorProdutos
}
