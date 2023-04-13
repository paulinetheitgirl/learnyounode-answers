'use strict';
const mymodule = require('./06modular_module.js') 

mymodule(process.argv[2],
    process.argv[3],
    (err, files) => {
        for (const fileName of files) {
            console.log(fileName);
        }
    });