module.exports = function(servidor){

    servidor.get('/produtos', function(req, resp){
        const produtos = [
            {
                titulo: "Titulo 1"
            },
            {
                titulo: "Titulo 2"
            },
            {
                titulo: "Titulo 3"
            },
        ]
    
        resp.render('produtos/lista', {
            livros: produtos
        })
    })

}
