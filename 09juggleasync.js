// Assume that 3 URLs are provided as arguments
var http = require('http');

var urls = process.argv.slice(2);
var ended = 0;
var responses = ['', '', ''];

urls.forEach(function(element, index){
	http.get(element,
		function(response){
			response.setEncoding('utf8');

			response.on('data', function(data){
				responses[index] += data;
			});
			response.on('error', function(){
				console.log('There was an error');
			});
			response.on('end', function(){
				ended++;
				if (ended == 3) {
					responses.forEach(function(responseString){
						console.log(responseString);
					});
				}
			});
		});
});