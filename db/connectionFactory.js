const mysql = require('mysql');

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

function getConnection(){
    return new Promise((callbackSucesso, callbackErro) => {

        pool.getConnection(function(erro, conexao){
            try {
                if(!erro){
                    callbackSucesso(conexao)
                } else {
                    callbackErro(erro)
                }
            } catch(error){
                callbackErro(error)
            }
        })

    })
}

exports.getConnection = getConnection

function createConnectionSync() {
    return mysql.createConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });
}

exports.createConnectionSync = createConnectionSync;