var http = require('http');
var url = require('urls');
var start = '/api/parsetime?iso=YYYY-MM-DDT'.length;


var server = http.createServer( function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.method == 'GET') {
        console.log(req.url);
        var parsed = url.parse(req.url, true);
    }
})
server.listen(process.argv[2]);
