// load up our requires
var sys = require('sys'),
    http = require('http'),
    fs = require('fs');

// a global var for our html index
var index;

// reads the local index.html and passes it as data 
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
 
// now run the server
http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.end(index);
}).listen(8000);
