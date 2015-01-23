var http = require('http');
var URL = process.argv[2];
var concatData = '';

http.get(URL, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        concatData += data;
    })
    response.on('end', function (end) {
        console.log(concatData.length);
        console.log(concatData);
    })
});

