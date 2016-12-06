var http = require('http');
var url = require('url');

var port = process.argv[2];

var convertHourMinuteSecond = function(isoTime){
	var theDate = new Date(isoTime); 
	return {
		"hour": theDate.getHours(),
		"minute": theDate.getMinutes(),
		"second": theDate.getSeconds(),
	};
	
}

var convertUnixTIme = function(isoTime){
	var theDate = new Date(isoTime); 
	return {
		"unixtime": theDate.valueOf()
	};	
}

var server = http.createServer(function(request, response) {
		if(request.method == 'GET') {
			var requestObject = url.parse(request.url, true);

			if(requestObject.pathname.indexOf('api/parsetime') > -1){
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify(convertHourMinuteSecond(requestObject.query.iso)));
			}
			if(requestObject.pathname.indexOf('api/unixtime') > -1){
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify(convertUnixTIme(requestObject.query.iso)));
			}
		}
    });
server.listen(port);