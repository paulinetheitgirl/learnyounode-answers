const fs = require('fs');

const fileBuffer = fs.readFileSync(process.argv[2]);
const textLinesArr = (fileBuffer.toString()).split('\n');
console.log(textLinesArr.length < 2 ? 0 : textLinesArr.length - 1);