require('dotenv').config({
    path: process.env.NODE_ENV
        ? './.env.' + process.env.NODE_ENV
        : './.env'
})

const http = require('http')

const servidorExpress = require('./servidor')

const servidorGeral = http.Server(servidorExpress)


const socketio = require("socket.io")
const io = socketio(servidorGeral)
servidorExpress.set("io", io)

const canal = io.of("/chat2")

canal.on("message", function(data){
    console.log("##### MSG")
    canal.emit("message", data)
})

canal.on("connection", function(socket){
    
    socket.on("souEu", function(token){
        socket.emit("identifiquei", "Servidor FTW: " + token)
    })
    
    socket.emit("quemEh")


})

servidorGeral.listen(process.env.PORT, function (){
    console.log("Subiu o servidor em localhost:" + process.env.PORT)
})
