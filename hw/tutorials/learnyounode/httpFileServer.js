var args = process.argv.slice(2);
var port = args[0];
var loctn = args[1];
var fs = require('fs');
var http = require('http');

var src = fs.createReadStream(loctn);
var server = http.createServer(function (request, response) {
//    response.writeHead(200, { 'content-type': 'text/plain' }) //what does this do? why can I run this without it?
    src.pipe(response);
});
server.listen(port);

