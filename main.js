const servidor = require('./servidor')

require('dotenv').config()

servidor.listen(process.env.PORT, function (){
    console.log("Subiu o servidor em localhost:" + process.env.PORT)
})
