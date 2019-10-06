const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const newLines = data.split('\n').length - 1;
  console.log(newLines);
});
