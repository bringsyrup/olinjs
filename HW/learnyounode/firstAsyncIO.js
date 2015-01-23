var fs = require('fs');

fs.readFile(process.argv[2].toString(), 'utf8', function callback (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length - 1);
});
