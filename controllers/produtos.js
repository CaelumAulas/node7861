function lista(req, resp){
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