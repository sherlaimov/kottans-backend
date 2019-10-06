const printDir = require('./make-it-modular-1');

const dirPath = process.argv[2];
const fileExt = process.argv[3].includes('.') ? process.argv[3].replace('.', '') : process.argv[3];

printDir(dirPath, fileExt, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data.forEach(file => console.log(file));
});
