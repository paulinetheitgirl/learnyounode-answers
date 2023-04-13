const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, stringData) => {
    if (err) throw err;
    const textLinesArr = stringData.split('\n');
    console.log(textLinesArr.length < 2 ? 0 : textLinesArr.length - 1);
  });

