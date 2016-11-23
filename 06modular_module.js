var fs = require('fs');
var path = require('path');

module.exports = function(directory, 
	extension,
	callback) {
	var fileExtension = "." + extension;
	fs.readdir(directory,
		function(err, list){
			if(err) return callback(err);
			
			var files = [];
			list.forEach(function(element){
				if(path.extname(element) == fileExtension){
					files.push(element);
				}			
			});
			callback(null, files);
		});
};


