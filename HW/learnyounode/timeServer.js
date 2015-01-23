var port = process.argv[2];
var net = require('net');
//var concat = require('concat');

var server = net.createServer( function (socket) {
    var date = new Date();
    var month = date.getMonth() + 1;
    month = month.toString();
    if (month.length == 1) month = '0'.concat(month);
    var formattedDate = date.getFullYear().toString().concat('-', month, '-', date.getDate().toString(), ' ', date.getHours().toString(), ':', date.getMinutes().toString());
    socket.write(formattedDate);
    socket.end();
})
server.listen(port);

//YYY-MM-DD hh:mm \n

