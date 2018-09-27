require('dotenv').config()

const servidor = require('./servidor')

servidor.listen(process.env.PORT, function (){
    console.log("Subiu o servidor em localhost:" + process.env.PORT)
})
