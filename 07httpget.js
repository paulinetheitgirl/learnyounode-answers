var http = require('http');

var url = process.argv[2];
http.get(url,
	function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			process.stdout.write(data + '\n');
		});
		response.on('error', function(){
			process.stdout.write('There was an error');
		});
	});

