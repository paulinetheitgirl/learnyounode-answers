var net = require('net');

var port = process.argv[2];
var server = net.createServer(function(socket) {
		// sure you could use Date.prototype.toLocaleDateString(), but why bother
    	var now = new Date();
    	var theMonth = now.getMonth() + 1;
    	var theDay = now.getDate();
    	var theHour = now.getHours();
    	var theMinutes = now.getMinutes();

    	socket.end(now.getFullYear() + '-' 
    		+ (theMonth < 10 ? '0' : '') + theMonth + '-' 
    		+ (theDay < 10 ? '0' : '') + theDay + ' '
    		+ (theHour < 10 ? '0' : '') + theHour + ':'
    		+ (theMinutes < 10 ? '0' : '') + theMinutes + '\n');
    });
server.listen(port);