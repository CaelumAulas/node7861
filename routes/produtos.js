const ProdutosController = require('../controllers/produtos')

// Decorator
function catchErrors(handler){
    return function(req, resp, next){        
        // handler(req, resp, next)?.catch(erro => next(erro))
        const resultadoHandler = handler(req, resp, next)
        if(resultadoHandler && resultadoHandler.catch) resultadoHandler.catch(erro => next(erro))
    }
}

module.exports = function(servidor){
    servidor.get('/produtos', catchErrors(ProdutosController.lista))
    servidor.get('/produtos/form', catchErrors(ProdutosController.form))
    servidor.post('/produtos', catchErrors(ProdutosController.cadastro))
}
