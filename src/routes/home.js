module.exports = function (servidor){

    servidor.get('/', function(req, resp){
        resp.render("home/home")
    })
    
}
