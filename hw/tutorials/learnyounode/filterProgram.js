var filterMod = require('./filterModule.js');
var args = process.argv.slice(2,4);
var dirName = args[0];
var fileExt = args[1];
filterMod(dirName, fileExt, function (err, filteredList) {
    if (err) { 
        console.error('you done fucked it:', err);
    }
    else {
        for ( i=0; i<filteredList.length; i++ ) {
            console.log(filteredList[i]);
        }
    }
});
