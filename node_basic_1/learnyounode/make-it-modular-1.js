const fs = require('fs');
const path = require('path');

function printDir(dirName, ext, cb) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      cb(err);
      return;
    }
    const filtered = list.filter(pathStr => path.extname(pathStr) === `.${ext}`);

    cb(null, filtered);
  });
}

module.exports = printDir;
