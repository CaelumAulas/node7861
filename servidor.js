const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")

require('./routes/home')(servidor)
require('./routes/produtos')(servidor)

module.exports = servidor