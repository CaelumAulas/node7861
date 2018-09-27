require('dotenv').config({
    path: process.env.NODE_ENV
        ? './.env.' + process.env.NODE_ENV
        : './.env'
})

const servidor = require('./servidor')

servidor.listen(process.env.PORT, function (){
    console.log("Subiu o servidor em localhost:" + process.env.PORT)
})
