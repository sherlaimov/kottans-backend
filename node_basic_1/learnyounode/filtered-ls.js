const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
const fileExt = process.argv[3].includes('.') ? process.argv[3].replace('.', '') : process.argv[3];

fs.readdir(filePath, (err, list) => {
  if (err) console.error(err);
  const filtered = list.filter(pathStr => path.extname(pathStr) === `.${fileExt}`);
  filtered.forEach(file => console.log(file));
});
