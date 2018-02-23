var http = require("http");
var tasks = require("./tasks");
function randomTask (array){
    var randomNumber = Math.floor(Math.random()*array.length);
    return array [randomNumber];
}

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/plain" }); 
    response.write(randomTask(tasks));
    response.end();
}).listen(3000); 