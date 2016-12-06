var http = require('http');
var fs = require("fs");

var port = process.argv[2];
var fileLocation = process.argv[3];
var server = http.createServer(function(request, response) {
        var fileStream = fs.createReadStream(fileLocation);
        fileStream.pipe(response);	
    });
server.listen(port);