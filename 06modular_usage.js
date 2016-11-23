var mymodule = require('./06modular_module.js'); // .js extension is optional

mymodule(process.argv[2],
	process.argv[3],
	function(err, data){
		if(err) console.log("There was an error: ", error.stack);

		data.forEach(function(element){
			console.log(element);
		});
	});