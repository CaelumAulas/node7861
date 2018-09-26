const http = require('http')
const fs = require('fs')

const servidor = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    if(request.url == "/"){
        response.end("<h1> Home </h1>")
    } else {
        response.end(fs.readFileSync("lista.html"))
    }
})

servidor.listen(3000, function (){
    console.log("Subiu o servidor")
})
