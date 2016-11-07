var fs = require('fs');

var bufferString;
fs.readFile(process.argv[2],
	{ 'encoding': 'utf8' },
	function(err, data){
		if(err) throw err;
		bufferString = data;
		var lines = bufferString.split('\n').length;
		console.log(lines > 2 ? lines - 1 : 0);
	});

