const servidor = require('./servidor')

const jsonCofig = require('./config')

servidor.listen(jsonCofig.port, function (){
    console.log("Subiu o servidor em localhost:" + jsonCofig.port)
})
