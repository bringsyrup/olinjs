module.exports = function (dirName, fileExt, callback) {
    var fs = require('fs');
    var filteredList = [];
    fs.readdir(dirName, function (err, list) {
        if (err) return callback(err);
        for ( var i=0; i<list.length; i++ ) {
            if ( list[i].indexOf('.') > -1 ) {
                if ( list[i].split('.').pop() == fileExt ) {
                    filteredList.push(list[i]);
                }
            }
        }
        callback(null, filteredList);
    });
}
