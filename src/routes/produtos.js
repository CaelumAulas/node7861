const ProdutosController = require('../controllers/produtos')

function catchErrors(handler){
    return function(req, resp, next){                
        handler(req, resp, next)?.catch(erro => next(erro))
    }
}

const express = require('express')

const roteadorProdutos = express.Router()

const expressValidator = require('express-validator')

roteadorProdutos.use(express.urlencoded())
roteadorProdutos.use(express.json())

roteadorProdutos.get('/', catchErrors(ProdutosController.lista))
roteadorProdutos.get('/form', catchErrors(ProdutosController.form))
roteadorProdutos.post('/', expressValidator(), catchErrors(ProdutosController.cadastro))

module.exports = roteadorProdutos
