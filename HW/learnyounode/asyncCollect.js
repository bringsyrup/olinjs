var http = require('http');
var URLS = process.argv.slice(2);
var results = [null, null, null];
var count = URLS.length;
//console.log(URLS);

for (i=0; i<URLS.length; i++) {
    (function(locked){
        http.get(URLS[locked], function (response) {
            var concatData = '';
            response.setEncoding('utf8');

            response.on('data', function (data) {
                concatData += data;
            })

            response.on('end', function (end) {
                results[locked] = concatData;
                count = URLS.length;
                for (j=0; j<results.length; j++) {
                    if (results[j] != null) count--;
                }
                if (count == 0) {
                    for (k=0; k<results.length; k++){
                        console.log(results[k]);
                    }
                }
            })
        })
    }(i))
}

