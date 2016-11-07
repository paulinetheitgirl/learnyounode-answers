var fs = require('fs');
var path = require('path');

var fileExtension = "." + process.argv[3];
fs.readdir(process.argv[2],
	function(err, list){
		if(err) throw err;
		
		list.forEach(function(element){
			if(path.extname(element) == fileExtension){
				console.log(element);
			}			
		});
	});

