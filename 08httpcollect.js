var http = require('http');

var url = process.argv[2];
http.get(url,
	function(response) {
		response.setEncoding('utf8');
		var allData = '';

		response.on('data', function(data) {
			allData += data;
		});
		response.on('error', function() {
			console.log('There was an error');
		});
		response.on('end', function() {
			console.log(allData.length);
			console.log(allData);
		});
	});

