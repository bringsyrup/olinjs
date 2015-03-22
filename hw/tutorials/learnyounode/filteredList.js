var fs = require('fs');
var args = process.argv.slice(2, 4);
fs.readdir(args[0], function callback (err, list) {
    if (err) throw err;
    for ( var i=0; i<list.length; i++ ) {
        if ( list[i].indexOf('.') > -1 ) {
            if ( list[i].split('.').pop() == args[1] ) {
                console.log(list[i]);
            }
        }
    }

});
