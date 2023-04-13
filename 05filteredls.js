'use strict';
const fs = require('fs');

const fileExtension = '.' + process.argv[3];

fs.readdir(process.argv[2],
    (err, files) => {
    if (err) throw err;
    for (const fileName of files) {
        if (fileName.endsWith(fileExtension)) {
            console.log(fileName);
        }
    }
  });
