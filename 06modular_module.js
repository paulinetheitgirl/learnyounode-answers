const fs = require('fs');

module.exports = function (path, ext, callback) {
    const fileExtension = '.' + ext;
    const filteredFiles = [];

    fs.readdir(path,
        (err, files) => {
        if (err) return callback(err);
        for (const fileName of files) {
            if (fileName.endsWith(fileExtension)) {
                filteredFiles.push(fileName);
            }
        }
        return callback(err, filteredFiles);
    });
};
